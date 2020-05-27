
var fav=0;
var fav1=0;
var fav2=0;
var x=0;
var h=0;
var z=0;

function addfavs(){
  if(fav==0){
  var curso = {

      titulo: 'Coaching Personalisado',
      localizacao: 'Porto- Edificio Bom Sucesso',
      desc: 'O Coaching personalisado é um processo confidêncial através do qual a pessoa é apoiada por um Professional por forma a atingir mais rápida e eficazmente as metas a que se propõe..',
      data: new Date('2020-02-25')
    };

  localStorage.setItem("cursos" + x, JSON.stringify(curso));
  x++;
  fav++;
}
}
function addfavs1(){
  //localStorage.setItem("curso2", "Coaching 2| | Porto-AEP e Portal do Ser "," 30/03/2020");
  if(fav1==0){
  var curso = {
      titulo: 'Coaching 2',
      localizacao: 'Lisboa- Hotel Tryp Aeroporto ',
      desc: 'Auto-conhecimento,Auto-superação,motivação,gestão de equipas,excelência pessoal.',
      data: new Date('2020-01-25')
    };

  localStorage.setItem("cursos" + x, JSON.stringify(curso));
  x++;
  fav1++;
}}
function addfavs2(){
  //localStorage.setItem("curso3", "Executive Coaching for Leaders | Lisboa", "20/01/2020");
    if(fav2==0){
  var curso = {
      titulo: 'Coaching 3',
      localizacao: 'Lisboa - Hotel Principal',
      desc: 'Executive Coaching for Leaders ',
      data: new Date('2020-05-25')
    };

  localStorage.setItem("cursos" + x, JSON.stringify(curso));
  x++;
  fav2++;
}}
function ativas(){
  document.getElementById("p3").innerHTML = "";
  document.getElementById("p2").innerHTML = "";
  for (i = 0; i < localStorage.length; i++) {
  var curso = JSON.parse(localStorage.getItem("cursos" + i));
  if(new Date(curso.data) >= new Date()){

    document.getElementById('p2').innerHTML += "<br>" +  curso.titulo + " | " + curso.localizacao + " | " + curso.data + "<br>" + '<button type="button" class="btn btn-info btn-lg" onClick="updateModal(' + i + ')" data-toggle="modal" data-target="#myModal" >Detalhes do Curso</button>' + "<button onclick='futuro(" + i +"," + h +")';>inscrever no curso</button>" ;
  }
  else{

    document.getElementById('p3').innerHTML += "<br>"  + curso.titulo + " | " + curso.localizacao + " | " + curso.data + "<br>" + '<button type="button" class="btn btn-info btn-lg" onClick="updateModal(' + i + ')" data-toggle="modal" data-target="#myModal" >Detalhes do Curso</button>';
  }
}
}
function apagar(){
  localStorage.removeItem("cursos0");
  localStorage.removeItem("cursos2");
}
function apagar1(){
  localStorage.removeItem("cursos1");
}
function addform(){

  var subs ="";
  var curso = {
      titulo: document.getElementById("field").value,
      localizacao: document.getElementById("field4").value,
      desc: document.getElementById("field3").value,
      data: new Date(document.getElementById("hora").value),
    };
    subs = JSON.stringify(curso);
  localStorage.setItem("cursos" + x,subs) ;
  x++;
  document.getElementById("p1").innerHTML += "Curso: "+curso.titulo + " Localidade: " +curso.localizacao + " Descrição: " + curso.desc +"<br>"  ;

}
function futuro(i,h){
  var fut =JSON.parse( localStorage.getItem("cursos" + i ));
  document.getElementById("f").innerHTML += "<br>" + " Curso: "+ fut.titulo + " | Zona: " + fut.localizacao + " | Data de inscrição:" + new Date() + "<br>";
  localStorage.setItem("eventos" + h, JSON.stringify(fut));
  h++;
}
function aval(){
  var rate="";
  var avals = {
    curso: document.getElementById("nome_curso").value,
    orientador: document.getElementById("nome_orientador").value,
    data:document.getElementById("dataval").value,
  };
  rate = JSON.stringify(avals);
  localStorage.setItem("avals" + z, rate);
  z++;
}
function eventos(){
  var evento = JSON.parse(localStorage.getItem("eventos0"));

  document.getElementById("f").innerHTML += "Curso: " + evento.titulo +   " |"  +"   Zona: "+ evento.localizacao  + " |"  + " Data: " +evento.data  + " |" ;

};
function updateModal(i){
  var fut =JSON.parse( localStorage.getItem("cursos" + i ));
  document.getElementById("titulo").innerHTML +=  fut.titulo;
  document.getElementById("zona").innerHTML += fut.localizacao;
  document.getElementById("data").innerHTML += fut.data;
  document.getElementById("desc").innerHTML += curso.desc;
}
