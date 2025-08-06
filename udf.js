function transform(line) {
    var values = line.split(",") // Split the input line by commas 
    
    // Check if it's the header row (first line) and skip it
    if(values[0] === "first_name"){
        return null; //Skip processing the header row
    }

    // Create an object mapping the values to the BigQuery schema
    var obj = new Object();

    obj.first_name = values[0];
    obj.last_name = values[1];
    obj.job_title = values[2];
    obj.department = values[3];
    obj.email = values[4];
    obj.address = values[5];
    obj.phone_number = values[6];
    obj.salary = parseInt(values[7]); //Convert to integer
    obj.password = values[8];

    // Convert the Object to a JSON string
    var jsonString = JSON.stringify(obj);
    return jsonString;
}

