const { MongoClient } = require ('mongodb')

const client = new MongoClient ('mongodb://127.0.0.1:27017/nodemongo')

client.connect ()
    .then(()=> {
       // console.log('Connected Successfully & Database Created!')
        //close database
        //client.close();
        var dbo = client.db('nodemongo');
        /*dbo.createCollection('customers').then(function(){
            console.log("Colloection created");
            //Close database connection
            client.close();

        })*/
        /*var custData = { name: "WestCliff", address :"Irvine, CA"};
        dbo.collection ("customers").insertOne(custData).then(function() {
            console.log("1 document inserted")
            client.close()
        })*/

        /*var custData =[
            { name: 'John', address: 'Highway 71'},
            { name: 'Peter', address: 'Lowstreet 4'},
            { name: 'Amy', address: 'Apple st 652'},
            { name: 'Hannah', address: 'Mountain 21'},
            { name: 'Michael', address: 'Valley 345'},
            { name: 'Sandy', address: 'Ocean blvd 2'},
            { name: 'Betty', address: 'Green Grass 1'},
            { name: 'Richard', address: 'Sky st 331'},
            { name: 'Susan', address: 'One way 98'},
            { name: 'Vicky', address: 'Yellow Garden 2'},
            { name: 'Ben', address: 'Park Lane 38'},
            { name: 'William', address: 'Central st 954'},
            { name: 'Chuck', address: 'Main Road 989'},
            { name: 'Viola', address: 'Sideway 1633'}
        ];
        dbo.collection('customers').insertMany(custData).then(function(res){
            console.log('Number of documents inserted:' + res.insertedCount);
            client.close();
        })*/
        /*dbo.collection('customers').findOne({}).then(function(res){
            console.log(res.name);
            client.close();
        })*/

        /*var query = {address: "Park Lane 38"}
        dbo.collection('customers').find(query)
            .toArray()
            .then(items => {
                console.log(`Successfully found ${items.length} document.`)
                console.log(items);
                client.close();
            }) */
        /*var mysort ={name: 1}
        dbo.collection('customers').find()
            .sort(mysort)
            .toArray()
            .then(items => {
                console.log( `Successfully sorted ${items.length} documents.`)
                console.log(items);
                client.close();
            }) */
            /*var myquery = {address: "Mountian 21 "}
            dbo.collection ('customers').deleteOne(myquery).then(function(){
                console.log("1 document deleted");
                client.close();
            })*/
            var myquery = {address: "Valley 345"}
            var newvalues = {$set: {name: "Mickey", address: " Canyon 123"}};
            dbo.collection ('customers').updateOne(myquery, newvalues).then(function() {
                console.log("1 document updated");
                client.close();
            })
    })
    .catch(error => console.log ( 'Failed to connect', error))