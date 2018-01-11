const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/saritadatabase";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;


  //------------------------create databasee---------------------------
  // db.createCollection("employees", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!");
  //   db.close();
  // });

  //-------------------------add rows -------------------------------------
    var emplobj=[
                    {id:1,
                    name:"Ian Malcolm",
                    salary:50000,
                    designation:"Manager",
                    hoursWorked:6
                    },
                    {id:2,
                    name:"Catherine Hall",
                    salary:54000,
                    designation:"Manager",
                    hoursWorked:7
                    },
                    {id:3,
                    name:"Rose Dawson",
                    salary:50000,
                    designation:"Manager",
                    hoursWorked:3
                    },
                    {id:4,
                    name:"Ben Lucas",
                    salary:30000,
                    designation:"Manager",
                    hoursWorked:8
                    },
                    {id:5,
                    name:"Sanjay Masrani",
                    salary:80000,
                    designation:"Manager",
                    hoursWorked:9
                    },
                    {id:6,
                    name:"Alan Grant",
                    salary:70000,
                    designation:"Manager",
                    hoursWorked:8
                    },
                    {id:7,
                      name:"John Hammond",
                      salary:60000,
                      designation:"Manager",
                      hoursWorked:4
                    },
                    {id:8,
                      name:"Ellie Sattler",
                      salary:60000,
                      designation:"Manager",
                      hoursWorked:6
                    },
                    {id:9,
                      name:"Ray Arnold",
                      salary:55000,
                      designation:"Manager",
                      hoursWorked:9
                    },
                    {id:10,
                      name:"Henry Wu",
                      salary:80000,
                      designation:"Manager",
                      hoursWorked:3
                    },
                    {id:11,
                      name:"Dennis Nedry",
                      salary:40000,
                      designation:"Manager",
                      hoursWorked:2
                    }
  ]
  // db.collection("employees").insertMany(emplobj, function(err, res) {
  //   if (err) throw err;
  // console.log("Number of documents inserted: " + res.insertedCount);
  // db.close();

  //---------------------------API WITH DATABASE--------------------------------
            app.all('*', (req, res, next) =>  {
                  res.header('Access-Control-Allow-Origin', '*')
                  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
                  next();
            });
  
                
            db.collection("employees").find({}).toArray(function(err, result) {
                if (err) throw err;
                //console.log(result);
                app.get('/employees', (req, res) => res.send(JSON.stringify(result)))
                
            });





             
              // app.get('/employees/:id', (req, res) => {
              //   var empId = req.params.id;
              //   var objEmployee = employees.filter(i => {return empId == i.id});
              //   res.json(objEmployee[0]);
                
              // });
              
              
              
             app.listen(8080, () => console.log('Example app listening on port 8080!'))
});

