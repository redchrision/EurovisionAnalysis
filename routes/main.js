const { name } = require("ejs");
const { fields } = require("mysql");

module.exports = function(app, con) {
    
    //This route querries the database resultsEurovision, displays all the Finalists and renders the Finalists webpage

    app.get("/finalists",function(req, res){
        con.query("SELECT * FROM finalists ORDER BY Finalists ASC", function (err, fields) {
            if(err) {
                res.render('/Users/user/Downloads/submission/mid-term/views/finalists.html',{data:''});   
            } else {
                res.render('/Users/user/Downloads/submission/mid-term/views/finalists.html',{
                    data:fields,
                    title: "List Finalists"
                });
            };
        });
    });

    //This route renders the Juryvotes webpage and 
    //selects the Finalists column from finalists table and the Juryvotes column from the juryvotes table
    //and it joins them together, in descending order
    app.get("/juryvotes",function(req, res){
        con.query(`SELECT f.Finalists, j.Juryvotes FROM finalists AS f 
        JOIN juryvotes AS j ON j.CountryID = f.CountryID
        ORDER BY Juryvotes DESC;`, function (err, fields) {
            if(err) {
                res.render('/Users/user/Downloads/submission/mid-term/views/juryvotes.html',{data:''});   
            } else {
                res.render('/Users/user/Downloads/submission/mid-term/views/juryvotes.html',{
                    data:fields,
                    title: "List Juryvotes"
                });
            };
        });
    });

    //This route renders the Televotes webpage and 
    //selects the Finalists column from finalists table and the Televotes column from the televotes table
    //and it joins them together, in descending order
    app.get("/televotes",function(req, res){
        con.query(`SELECT f.Finalists, j.Televotes FROM finalists AS f 
        JOIN televotes AS j ON j.CountryID = f.CountryID
        ORDER BY Televotes DESC;`, function (err, fields) {
            if(err) {
                res.render('/Users/user/Downloads/submission/mid-term/views/televotes.html',{data:''});   
            } else {
                res.render('/Users/user/Downloads/submission/mid-term/views/televotes.html',{
                    data:fields,
                    title: "List Televotes"
                });
            };
        });
    });

    //This route renders the Total votes webpage and 
    //selects the Finalists column from finalists table, the Juryvotes from the juryvotes table and 
    //the Televotes column from the televotes table, 
    //it makes a sum out of Juryvotes and Televotes called Total,
    //and it joins them together, in descending order
    app.get("/totalvotes",function(req, res){
        con.query(`SELECT f.Finalists, g.Juryvotes, j.Televotes, (j.televotes + g.juryvotes) AS Total 
        FROM finalists AS f 
        JOIN juryvotes AS g on g.CountryID = f.CountryID 
        JOIN televotes AS j ON j.CountryID = f.CountryID 
        ORDER BY Total DESC;`, function (err, fields) {
            if(err) {
                res.render('/Users/user/Downloads/submission/mid-term/views/totalvotes.html',{data:''});   
            } else {
                res.render('/Users/user/Downloads/submission/mid-term/views/totalvotes.html',{
                    data:fields,
                    title: "List Total Votes"
                });
            };
        });
    });
}

