import javax.swing.*;
import java.awt.event.*;

public class VentanaSuma extends JFrame implements ActionListener {
    // Declaración de componentes como estudiante que apenas está aprendiendo
    private JTextField txtNum1, txtNum2;
    private JButton btnSumar;
    private JLabel lblResultado;

    public VentanaSuma() {
        setTitle("Suma Básica - Pág 400");
        setSize(300, 200);
        setLayout(null); 
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        txtNum1 = new JTextField();
        txtNum1.setBounds(50, 20, 80, 25);
        txtNum2 = new JTextField();
        txtNum2.setBounds(150, 20, 80, 25);

        btnSumar = new JButton("Sumar");
        btnSumar.setBounds(100, 60, 90, 30);
        btnSumar.addActionListener(this); 

        lblResultado = new JLabel("Resultado: ");
        lblResultado.setBounds(50, 100, 200, 25);

        add(txtNum1);
        add(txtNum2);
        add(btnSumar);
        add(lblResultado);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == btnSumar) {
            try {
                int n1 = Integer.parseInt(txtNum1.getText());
                int n2 = Integer.parseInt(txtNum2.getText());
                lblResultado.setText("Resultado: " + (n1 + n2));
            } catch (NumberFormatException ex) {
                JOptionPane.showMessageDialog(this, "Solo ingrese números enteros.");
            }
        }
    }

    public static void main(String[] args) {
        new VentanaSuma().setVisible(true);
    }
}
