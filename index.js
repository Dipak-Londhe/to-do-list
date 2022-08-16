

let add = document.getElementById("add_item");
let str;
let list_array;
let count=0;

function display()
{
   list_array=[];
   str="";
   
   let json1=localStorage.getItem('itemJson1');
   if(JSON.parse(json1)==null)
   {
      return;
      
   }
   else
   {
      let list_array1=localStorage.getItem('itemJson1');
   list_array=JSON.parse(list_array1);


   list_array.forEach((element , index) => {

     str+=`

   <tr class="row">
          <td class="srno" style="width:4%">${index+1}</td>
          <td class="list" style="width:82%">${element}</td>
    
          
          <td class="done" style="width:7%"><i class="fa-solid fa-pen-to-square but1 "  onclick="update(${index})"></i></td>
          
          <td class="done" style="width:7%"><i class="fa-solid fa-trash delete " onclick="deleted(${index})"></i></td>
          

      </tr>


   `
      count=count+1;

         } )
   }
   
                 

         document.getElementById("table1").innerHTML=str;


}



display();

add.addEventListener("click",()=>{

   str="";

   let input=document.getElementById("input").value;


     if(input.length==0)
     {
        alert("please enter the list");
     }
     else
     {

        if(localStorage.getItem('itemJson1')==null)
        {   
            list_array.push(input);
            localStorage.setItem('itemJson1',JSON.stringify(list_array));
            
        }
        else
        {
            let arraystring = localStorage.getItem('itemJson1');
            list_array=JSON.parse(arraystring);

            list_array.push(input);
       localStorage.setItem('itemJson1',JSON.stringify(list_array));
        }

        document.getElementById("input").value="";

     }
   
   
     display();
   



});

let deepak=document.getElementsByClassName("");

function deleted(index)
{
   let deletedd=confirm( "  YOU WANT TO DELETE ?  " );
   console.log(confirm);
   if(deletedd)
   {
      let cancel1=document.getElementById("table1");
   let cancel=cancel1.getElementsByClassName("row")[index];
   cancel.innerHTML="";
   cancel.style.display="none";

   list_array.splice(index,1);

   localStorage.setItem('itemJson1',JSON.stringify(list_array));

   count=count-1;
   }
   

}





function delete_all()
{

   let deletedd=confirm( "  YOU WANT TO DELETE ALL LIST ?  " );
   console.log(confirm);
   if(deletedd)
   {

   let count2=count;console.log(count2);
   for(let i=0 ; i<count2 ; i++)
   {
        deleted(i);
   } 
   count=0  ;

       }
}


let deleted_all=document.getElementsByClassName("but2")[0];
deleted_all.addEventListener("click" , delete_all);

function update(index)
{
   let select=document.getElementById("table1");
   let element=select.getElementsByClassName("row")[index];

   let str1="";

   str1=`
   

          <td class="srno" style="width:4%">${index+1}</td>
          <td class="list" style="width:82%">
          <input type="text" class="change" value="${list_array[index]}" limit="40" required>
         </td>
    
          
          <td class="done" style="width:7%"><i class="fa-solid fa-check  done1" onclick="upadte_list(${index})"></i></td>
          <td class="done" style="width:7%"></td>
          
          
          
   
   `

   element.innerHTML=str1;

   
}




function upadte_list(index)
{

   let change1=document.getElementsByClassName("change")[0];

   if(change1.value.length==0)
   {

      display();
      return;
   }
     list_array[index]=change1.value;

     localStorage.setItem('itemJson1',JSON.stringify(list_array)); 
   display();

}
