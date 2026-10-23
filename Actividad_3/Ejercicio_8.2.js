
import javax.swing.*;
import java.awt.*;

public class RegistroEstudiante extends JFrame {

    // Declaración de los componentes de la interfaz
    private JLabel lblNombre, lblApellido, lblEdad;
    private JTextField txtNombre, txtApellido, txtEdad;
    private JButton btnGuardar;

    public RegistroEstudiante() {

        // Configuramos las propiedades de la ventana
        setTitle("Registro de estudiante");
        setSize(340, 220);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Organizamos los componentes en una cuadrícula
        setLayout(new GridLayout(4, 2, 5, 5));

        // Creamos las etiquetas y los campos de texto
        lblNombre = new JLabel("Nombre:");
        txtNombre = new JTextField();

        lblApellido = new JLabel("Apellido:");
        txtApellido = new JTextField();

        // Parte propuesta: campo para la edad
        lblEdad = new JLabel("Edad:");
        txtEdad = new JTextField();

        // Creamos el botón Guardar
        btnGuardar = new JButton("Guardar");

        // Agregamos los componentes a la ventana
        add(lblNombre);
        add(txtNombre);

        add(lblApellido);
        add(txtApellido);

        add(lblEdad);
        add(txtEdad);

        add(new JLabel(""));
        add(btnGuardar);
    }

    public static void main(String[] args) {

        // Creamos y mostramos la ventana
        SwingUtilities.invokeLater(() -> {
            RegistroEstudiante ventana = new RegistroEstudiante();
            ventana.setVisible(true);
        });
    }
}
