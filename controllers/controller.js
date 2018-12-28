exports.sayHelloWorld = (req, res, next) => {
  res.render('includes/sayHello', {
    pageTitle: 'Say Hello Page'
  });
};