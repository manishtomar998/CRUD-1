// let a = 10;
// let b = 20;
// let addTask = (a, b) => {
//     var z = a + b;
// }
// addTask(a,b);
// console.log(z)
// let hello=()=>{
//     console.log("fdgdfs");
// }
// setInterval(hello,2000);

// let square = (z) => {
//     var x = z * z;
//     return x
// }
// addTask(a, b);

// let say = (n, m, k) => {

//     let arr = [calc(n), calc(m), calc(k)];
//     console.log(arr)
// }

// let calc = (x) => {
//     let result = x * 20 + 45;
//     return result;
// }

// say(10, 40, 60);

// let add = (a,b) => {
//     // let result = 0;
//     // for (let i = 0; i < b.length; i++) {
//     //     result = result + b[i]
//     // }
//     console.log(a,b);
// }

// add(2, 5,6)
// let arr = ["manish", "mayank", "robin", "savita", "shubham", "abhishant"];
// let result = arr.filter(data => {
//     let final = data.split("").sort();
//     if(final[0]=="a"){
//         if(final[0]==final[1]){
//             return true;
//         }
//     }
// })
// console.log(result);

let addTask = () => {
    let task = {
        task: document.getElementById("task").value
    };
    let data = {
        method: 'post',
        body: JSON.stringify(task),
        headers: {
            "content-type": "application/json"
        }
    }
    fetch("http://localhost:3000/tasks", data)
}
let showData = () => {
    fetch("http://localhost:3000/tasks").then(response => {
        response.text().then(res => {
            createRow(JSON.parse(res));
        })
    })
}
let createRow = (res) => {
    for (let index = 0; index < res.length; index++) {
        let tableRow = document.createElement("tr");
        let data1 = document.createElement("td");
        let data2 = document.createElement("td");
        let updateBtn = document.createElement("button");
        updateBtn.onclick = () => {
            updateTask(res[index]);
        }
        let deleteBtn = document.createElement("button");
        deleteBtn.onclick = () => {
            deleteTask(res[index]);
        }
        updateBtn.innerText = "Update"
        deleteBtn.innerText = "Delete"
        data1.innerText = res[index].id;
        data2.innerText = res[index].task;
        tableRow.appendChild(data1);
        tableRow.appendChild(data2);
        tableRow.appendChild(updateBtn);
        tableRow.appendChild(deleteBtn);
        document.getElementById("allData").appendChild(tableRow);
    }
}

let updateTask = (item) => {
    let task = { task: document.getElementById("task").value }
    let data = {
        body: JSON.stringify(task),
        headers: {
            "content-type": "application/json"
        },
        method: "put"
    }
    fetch(`http://localhost:3000/tasks/${item.id}`, data)
}
let deleteTask = (item) => {
    let data = {
        headers: {
            "content-type": "application/json"
        },
        method: "delete"
    }
    fetch(`http://localhost:3000/tasks/${item.id}`, data)
}