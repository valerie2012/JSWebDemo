# JSWebDemo
JSWebDemo

<H2> Installation Steps </H2>

<H4> Operating System: MacOS </H4> 

<H4>XAMPP</H4> <br/>
Website: https://www.apachefriends.org/index.html <br/>

1. Start the XAMPP <br/>
<img src="images/Start_XAMPP.png" width="50%" height="50%"> <br/>

2. Start the required stack services <br/>
<img src="images/Start_SS.png" width="50%" height="50%"> <br/>

3. Enable the port fowarding rules <br/>
<img src="images/Start_port.png" width="50%" height="50%"> <br/>

4. Click "Mount" to acess the "htdocs" folder in the directory <br/>
<img src="images/Start_mount.png" width="50%" height="50%"> <br/>

<img src="images/Start_mount2.png" width="50%" height="50%"> <br/>

<H4> Node.js</H4> 
Node.js and npm can be installed from Node installation page (https://nodejs.org/en/download/). <br/>
Download the Node installer. <br/>

Once the installation is done, you can test to see both node and npm functioning by opening Terminal (or any shell) and type node -v and npm -v, which will check the version number.

<img src="images/VersionNumber.png" width="50%" height="50%"> <br/>
Use the <strong>npm init</strong> command to create a package.json file for your application. <br/>
<img src="images/Npm_init.png" width="50%" height="50%"> <br/>

Install the following node.js modules for the backend Javascript codes (controller.js). <br/>

<strong> express </strong> <br/>
https://www.npmjs.com/package/express <br/>
<img src="images/Npm_express.png" width="50%" height="50%"> <br/>

<strong> body-parser </strong> <br/>
https://www.npmjs.com/package/body-parser <br/>
<img src="images/Npm_body_parser.png" width="50%" height="50%"> <br/>

<strong> urlencoded-parser </strong> <br/>
https://www.npmjs.com/package/urlencoded-parser <br/>
<img src="images/Npm_urlencoded_parser.png" width="50%" height="50%"> <br/>

<strong> cors </strong> <br/>
https://www.npmjs.com/package/cors <br/>
<img src="images/Npm_cors.png" width="50%" height="50%"> <br/>

<H4> React.js </H4>
Website: https://reactjs.org/docs/create-a-new-react-app.html

<strong> Key Creation Steps </strong> <br/>

Please create a folder "react" first. <br/>
Run the following commands <br/>
<img src="images/Npx.png" width="50%" height="50%"> <br/>

Navigate to the path "dashboard/react/table/src" <br/>
Open "App.js" at any IDE tool <br/>
Write Reactjs Table codes in App.js <br/>
Run <strong>"npm run build"</strong> command <br/>
<img src="images/Npm_run_build.png" width="70%" height="70%"> <br/>
<strong> Note: </strong> "npm build" command change to "npm run build" command <br/>

<H4> Homebrew MySQL </H4>
<strong> Install HomeBrew MySQL </strong> <br/>
<strong> Website: </strong> https://brew.sh/ <p></p>
Run the following commands at Terminal (or any shell) to install Homebew MySQL.<br/>
<img src="images/Homebrew_cmd.png" width="70%" height="70%"> <br/>
<img src="images/Homebrew_cmd2.png" width="70%" height="70%"> <br/>
Set <b>"user"</b> as <b>"root"</b> and <b>"password"</b> as <b>"root"</b> <br/>
<b> Note: </b> It is okay to set <b>"root"</b> for both <b>user</b> and <b>password</b> as this is just assessment. <br/>

Run <b>"mysql"</b> to start MySQL Service. <br/>
<img src="images/MySQL.png" width="70%" height="70%"> <br/>

Run the following command to create database <b>"nameregister"</b>. <br/>
<img src="images/Create_DB.png" width="70%" height="70%"> <br/>

Run the following command to select database. <br/>
<img src="images/Use_DB.png" width="70%" height="70%"> <br/>

Run the following command to create table <b>"names"</b> with <b> "ID" </b> & <b>"Name"</b> columns. <br/>
<img src="images/Create_Table.png" width="70%" height="70%"> <br/>

Run the following command to view structure of <b>"names"</b> table. <br/>
<img src="images/DB_structure.png" width="70%" height="70%"> <br/>


<H2> Run Website </H2>

<H4> Run Node.js </H4>
<img src="images/Run_node.png" width="70%" height="70%"> <br/>

<H4> Website Link </H4>
Paste URL <b>http://localhost:8080/dashboard/public/view.html </b> in browser. <br/>
<img src="images/Localhost.png" width="70%" height="70%"> <br/>

<H4> Run React </H4>
Paste URL <b> http://localhost:8080/table/ </b> in browser. <br/>
<img src="images/React.png" width="70%" height="70%"> <br/>

