function calcularTotal() {
    let compraTicket,
    total,
    categoria,
    ticketEstudiante,
    ticketTrainee,
    ticketJunior;

    compraTicket = document.getElementById('inputCantidad').value;
    categoria = document.getElementById('inputCategoria').value;
  
    ticketEstudiante = 200 - (200 * 80) / 100;
    ticketTrainee = 200 - (200 * 50) / 100;
    ticketJunior = 200 - (200 * 15) / 100;
  
    if (compraTicket > 0 && !isNaN(compraTicket) && compraTicket % 1 == 0) {
      if (categoria == 'Estudiante') {
        total = ticketEstudiante * compraTicket;
        document.getElementById('precioTotal').innerHTML = 'Total a Pagar: ' + total;
      } else if (categoria == 'Trainee') {
        total = ticketTrainee * compraTicket;
        document.getElementById('precioTotal').innerHTML = 'Total a Pagar: ' + total;
      } else if (categoria == 'Junior') {
        total = ticketJunior * compraTicket;
        document.getElementById('precioTotal').innerHTML = 'Total a Pagar: ' + total;
      }
    } else {
      window.alert('Ingresar cantidad de tickets');
    }
  }


function limpiarFormulario() {
    document.getElementById("miForm").reset();
  }