import { fileURLToPath }    from 'url';
import { dirname }          from 'path';
import express              from 'express';
import path                 from 'path';
import bodyParser           from 'body-parser';

//file upload import
import exphbs from 'express-handlebars';
import fileUpload from 'express-fileupload';

//login session import
import session              from 'express-session';
import passport             from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { allprod, prodid, add_prod, check_user, getaUser } from './database.js';

const app = express();
const PORT = process.env.PORT || 3000;

//express using
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set static folder to current directory
app.use(express.static(__dirname));

//set CORS
/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // แทนที่ 'http://example.com' ด้วยโดเมนของเว็บไซต์ที่คุณต้องการอนุญาตให้ใช้ข้อมูลนี้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // ระบุเมธอดที่อนุญาต
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // ระบุหัวข้อที่อนุญาตให้ส่งผ่าน
    next();
});*/

//set session for login 
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());

//no salt and hashed password in database
passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try {
        const user = await check_user(username);
        if (!user) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }

        // Compare the provided password with the password retrieved from the database
        if (password !== user.password) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }

        return cb(null, user); // Authentication successful
    } catch (err) {
        return cb(err);
    }
}));


passport.serializeUser(function(user, done) {
    
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    try {
        // Assuming there's a function to fetch user data by id from the database
        const user = await getaUser(id);
        
        done(null, user);
    } catch (err) {
        done(err);
    }
});

//handlebars for fileupload
const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view wngine', '.hbs');

// Routes
app.get('/qall', async (req, res) => {
    const allpd = await allprod()
    res.json(allpd);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/product/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await prodid(id);        
        res.json(product);
    } catch (error) {
        console.error('Error querying product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/addProduct', (req, res) => {
    res.sendFile(path.join(__dirname, 'edit.html'));
});

//new product
app.post('/newprod', async (req,res) => {
    let sampleFile;
    let uploadPath;

    //console.log(req.body)
    //console.log(req.files)
   if ( !req.files || Object.keys(req.files).length === 0)
        {
            return res.status(400).send('No files were uploaded.');
            
        }

    //name of input
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/pictures/upload/' + sampleFile.name;

    //console.log(sampleFile);

    //move to place file on server
    sampleFile.mv(uploadPath, async function(err)
    {
        if (err) return res.status(500).send(err);

        // Extract data from the request body
        const { prod_name, details, type, price } = req.body;
        uploadPath = '../pictures/upload/' + sampleFile.name;

        const addp = await add_prod(uploadPath, prod_name, details, type, price);
        res.redirect('/');
    })
    
     
});

app.get('/edit', (req, res) => {
    res.sendFile(path.join(__dirname, 'edit.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
}) 

app.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));


app.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        console.log("destroy session")
      if (err) { return next(err); }
      res.redirect('/');
    });
});


app.get('/user-info', async (req, res) => {
    
    if (req.session.passport) {
        const cur_user = await getaUser(req.session.passport.user);
        res.json({ loggedIn: true, username: cur_user[0].username });
    } else {
        res.json({ loggedIn: false });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
