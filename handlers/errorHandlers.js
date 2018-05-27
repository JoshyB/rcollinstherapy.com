/*
  Catch Errors Handler

  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
  Just remember to uncomment the function if you are going to use it
*/

// exports.catchErrors = fn => () => fn(...args).catch(error => console.log(error));
  
  // spits out the 404 error page
  exports.notFound = (req, res, next) => {
    res.render("error", {
      message: "Sorry, that page doesnt exists 😩",
      url: "/"
    });
  };
  
  
  