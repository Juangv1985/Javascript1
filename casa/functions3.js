//crear una funcion que muestre el nombre apellido y telefono de cada usuario
const users = [
  { name: "nacho", lastName: "Viano", phone: 66666666 },
  { name: "antonio", lastName: "mora", phone: 66666666 },
  { name: "angel", lastName: "malaga", phone: 66666666 },
];

function getUsers(arrayUsers) {
  for (let i = 0; i < arrayUsers.length; i++) {
    console.log(
      `nombre: ${arrayUsers[i].name} apellido: ${arrayUsers[i].lastName} telefono: ${arrayUsers[i].phone}`
    );
  }
}
getUsers(users);
