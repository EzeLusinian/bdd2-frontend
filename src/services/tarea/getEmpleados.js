
const getEmpleados = async(setEmpleados) => {
    try {
        var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "GET",
        redirect: "follow",
        cors: 'no-cors'
      };
    
      
      let response = await fetch("https://consultancymanager.azurewebsites.net/api/empleados", requestOptions)
      let data = await response.json()
      console.log(data)
      setEmpleados(data)
    } catch (error) {
        console.log(error)
    }

    
}
export default getEmpleados;
