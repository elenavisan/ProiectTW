const url = "http://localhost:8080/api"

async function get(url){
    return (await axios.get(url)).data
}

async function post(url, body){
    return (await axios.post(url, JSON.stringify(body), {
        headers: {"Content-Type": "application/json"}
    })).data;
}

async function addAliment(){
    let aliment = document.getElementById("inputAliment").value;

    if (!aliment){
        alert("alimentul nu trebuie sa fie gol")
        return
    }

    await post(url + "/addAliment", {title: aliment, disponibility: false})
    await loadTable();
}

async function loadTable(){
    let data = await get(url + "/getAliments")

    let tableDiv = document.getElementById("tableData")

    if (!data || !tableDiv){
        return
    }

    let myHTMLCode = [];
    myHTMLCode.push("<table id='alimentTable'>");
    myHTMLCode.push("<thead>")
    myHTMLCode.push("<tr> <th> Aliment </th> <th> disponibility </th> </tr>")
    myHTMLCode.push("</thead>")
    myHTMLCode.push("<tbody>")

    for (let item of data){
        myHTMLCode.push("<tr> <td> " + item.title + "  </td> <td> <input type='checkbox' value='" + item.title + "'")
        if (item.disponibility)    
            myHTMLCode.push(" checked " )
        myHTMLCode.push("> </td> </tr>")
    }

    myHTMLCode.push("</tbody>")
    myHTMLCode.push("<table>");

    tableDiv.innerHTML = myHTMLCode.join("")
}

loadTable();

about = document.getElementById("menuAbout")
tasks = document.getElementById("menuAliments")
contact = document.getElementById("menuContact")

about.onclick = function(){
    document.getElementById("about").style.display = "block"
    document.getElementById("contact").style.display = "none"
    document.getElementById("tasks").style.display = "none"
}

aliments.onclick = function(){
    document.getElementById("about").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementById("tasks").style.display = "block"
}

contact.onclick = function(){
    document.getElementById("about").style.display = "none"
    document.getElementById("contact").style.display = "block"
    document.getElementById("tasks").style.display = "none"
}