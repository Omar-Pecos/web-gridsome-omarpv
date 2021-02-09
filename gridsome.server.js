require('dotenv').config();
const axios = require('axios');

const baseURL = 'https://api-node-portfolio.omarpv.repl.co';
let myToken;

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {

    //get user token
      var {data} = await axios
        .post(baseURL + '/api/auth/login',
        {
          email: 'o@o.com',
          password : process.env.MY_ACCOUNT_PASS
        })
      
      myToken = data.data.token;

     const techsCollection = addCollection('Tech');

     /* get Techs */
      var {data} = await axios
        .get( baseURL + '/api/techs', {
          headers: {
            'Authorization': myToken
          }
        });
      const techData = data.data;

      for ( const tech of techData ){
        techsCollection.addNode({
            id : tech._id,
            name : tech.name,
            type : tech.type,
            icon : tech.icon
        })
      }

      const profileCollection = addCollection('Profile');

      /* get Profile */
      var {data} = await axios.get( baseURL + '/api/profile', {
        headers: {
          'Authorization': myToken
        }
      });
      const profileData = data.data;

      profileCollection.addNode({
            id : profileData._id,
            intro : profileData.intro,
            text : profileData.text,
            about : profileData.about,
            version : profileData.version
        })
    
      const coursesCollection = addCollection('Course');

      /* get Courses */
        var {data} = await axios.get( baseURL + '/api/courses', {
          headers: {
            'Authorization': myToken
          }
        });
        const courseData = data.data;
  
        for ( const course of courseData ){
          coursesCollection.addNode({
              id : course._id,
              name : course.name,
              description : course.description,
              platform : course.platform,
              duration : course.duration,
              language : course.language,
              url : course.url,
              techs : course.techs,
              done : course.done,
          })
        }

        const projectsCollection = addCollection('Project');

        /* get Projects */
          var {data} = await axios.get( baseURL + '/api/projects', {
            headers: {
              'Authorization': myToken
            }
          });
          const projectData = data.data;
    
          for ( const project of projectData ){
            projectsCollection.addNode({
                id : project._id,
                name : project.name,
                description : project.description,
                type : project.type,
                images : project.images,
                files : project.files,
                url : project.url,
                repo_url : project.repo_url,
                techs : project.techs,
                pinned : project.pinned,
            })
          }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
