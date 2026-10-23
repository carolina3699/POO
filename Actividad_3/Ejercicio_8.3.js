
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventosEstudiante extends JFrame implements ActionListener {

    // Declaración de los componentes
    private JLabel lblNombre;
    private JTextField txtNombre;
    private JButton btnSaludar;
    private JButton btnLimpiar;

    public EventosEstudiante() {

        // Configuramos la ventana
        setTitle("Eventos de estudiante");
        setSize(340, 150);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        
        setLayout(new FlowLayout());

      
        lblNombre = new JLabel("Ingresa tu nombre:");
        txtNombre = new JTextField(15);

        btnSaludar = new JButton("Saludar");

        // Parte propuesta: botón para limpiar
        btnLimpiar = new JButton("Limpiar");

        // Asociamos los botones con el manejador de eventos
        btnSaludar.addActionListener(this);
        btnLimpiar.addActionListener(this);

        
        add(lblNombre);
        add(txtNombre);
        add(btnSaludar);
        add(btnLimpiar);
    }

    // Método que responde a los eventos de los botones
    @Override
    public void actionPerformed(ActionEvent e) {

        if (e.getSource() == btnSaludar) {

          
            String nombre = txtNombre.getText().trim();

            if (nombre.isEmpty()) {
                JOptionPane.showMessageDialog(
                    this,
                    "Por favor, escribe tu nombre."
                );
            } else {
                JOptionPane.showMessageDialog(
                    this,
                    "¡Bienvenido, " + nombre + "!"
                );
            }

        } else if (e.getSource() == btnLimpiar) {

          
            txtNombre.setText("");
            txtNombre.requestFocus();
        }
    }

    public static void main(String[] args) {

      
        SwingUtilities.invokeLater(() -> {
            EventosEstudiante ventana = new EventosEstudiante();
            ventana.setVisible(true);
        });
    }
}
