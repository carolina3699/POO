import javax.swing.*;
import java.awt.*;

public class LoginApp extends JFrame {
    private JTextField txtUsuario;
    private JPasswordField txtClave; // Componente especial para que no se vea la contraseña
    private JButton btnLogin;

    public LoginApp() {
        setTitle("Login - Pág 412");
        setSize(300, 150);
        setLayout(new GridLayout(3, 2, 10, 10)); // GridLayout ordena en filas y columnas
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        add(new JLabel(" Usuario:"));
        txtUsuario = new JTextField();
        add(txtUsuario);

        add(new JLabel(" Contraseña:"));
        txtClave = new JPasswordField();
        add(txtClave);

        add(new JLabel("")); // Celda vacía para centrar el botón
        btnLogin = new JButton("Ingresar");
        add(btnLogin);

        btnLogin.addActionListener(e -> validarCredenciales());
    }

    private void validarCredenciales() {
        String user = txtUsuario.getText();
        // getPassword devuelve un arreglo de chars por seguridad, lo convierto a String para el ejemplo
        String pass = new String(txtClave.getPassword()); 

        if (user.equals("estudiante") && pass.equals("poo2026")) {
            JOptionPane.showMessageDialog(this, "¡Bienvenido a la clase!");
        } else {
            JOptionPane.showMessageDialog(this, "Credenciales incorrectas.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    public static void main(String[] args) {
        new LoginApp().setVisible(true);
    }
}
