import javax.swing.*;

public class VentanaIMC extends JFrame {
    private JTextField txtPeso, txtAltura;
    private JButton btnCalcular;
    private JLabel lblResultado;

    public VentanaIMC() {
        setTitle("Cálculo IMC - Pág 418");
        setSize(250, 200);
        setLayout(new BoxLayout(getContentPane(), BoxLayout.Y_AXIS)); // Apila componentes verticalmente
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        add(new JLabel("Peso (Kg):"));
        txtPeso = new JTextField();
        add(txtPeso);

        add(new JLabel("Altura (Metros):"));
        txtAltura = new JTextField();
        add(txtAltura);

        btnCalcular = new JButton("Calcular IMC");
        add(btnCalcular);

        lblResultado = new JLabel("---");
        add(lblResultado);

        btnCalcular.addActionListener(e -> procesarIMC());
    }

    private void procesarIMC() {
        try {
            double peso = Double.parseDouble(txtPeso.getText());
            double altura = Double.parseDouble(txtAltura.getText());
            // Lógica orientada a objetos (instanciación teórica de un objeto para cálculo)
            double imc = peso / (altura * altura);
            
            String estado = "";
            if (imc < 18.5) estado = "Bajo peso";
            else if (imc < 24.9) estado = "Peso normal";
            else estado = "Sobrepeso";

            lblResultado.setText(String.format("IMC: %.2f (%s)", imc, estado));
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Ingrese datos válidos.");
        }
    }

    public static void main(String[] args) {
        new VentanaIMC().setVisible(true);
    }
}
