import javax.swing.*;

public class ConversorGUI extends JFrame {
    private JTextField txtCelsius;
    private JButton btnConvertir;
    private JLabel lblFahrenheit;

    public ConversorGUI() {
        setTitle("Conversor - Pág 406");
        setSize(250, 150);
        setLayout(new java.awt.FlowLayout());
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        add(new JLabel("Grados Celsius:"));
        txtCelsius = new JTextField(10);
        add(txtCelsius);

        btnConvertir = new JButton("A Fahrenheit");
        add(btnConvertir);
        lblFahrenheit = new JLabel("°F: --");
        add(lblFahrenheit);

        // Practicando eventos con expresiones lambda
        btnConvertir.addActionListener(e -> convertirTemperatura());
    }

    private void convertirTemperatura() {
        try {
            double celsius = Double.parseDouble(txtCelsius.getText());
            double fahrenheit = (celsius * 9/5) + 32;
            lblFahrenheit.setText("°F: " + String.format("%.2f", fahrenheit));
        } catch (Exception ex) {
            lblFahrenheit.setText("Error");
        }
    }

    public static void main(String[] args) {
        new ConversorGUI().setVisible(true);
    }
}
