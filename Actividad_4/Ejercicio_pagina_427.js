import javax.swing.*;
import java.awt.*;

public class GestorTareas extends JFrame {
    private JTextField txtNuevaTarea;
    private JButton btnAgregar;
    private JList<String> listaTareas;
    private DefaultListModel<String> modeloLista; // Objeto que gestiona los datos de la JList

    public GestorTareas() {
        setTitle("Gestor de Tareas - Pág 427");
        setSize(300, 300);
        setLayout(new BorderLayout()); // Ideal para dividir la ventana en zonas (Norte, Centro, Sur)
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Panel superior para ingresar datos
        JPanel panelArriba = new JPanel();
        txtNuevaTarea = new JTextField(15);
        btnAgregar = new JButton("Añadir");
        panelArriba.add(txtNuevaTarea);
        panelArriba.add(btnAgregar);
        add(panelArriba, BorderLayout.NORTH);

        // Modelo y lista para el centro
        modeloLista = new DefaultListModel<>();
        listaTareas = new JList<>(modeloLista);
        add(new JScrollPane(listaTareas), BorderLayout.CENTER); // JScrollPane permite hacer scroll si hay muchas tareas

        // Evento del botón
        btnAgregar.addActionListener(e -> {
            String tarea = txtNuevaTarea.getText().trim();
            if (!tarea.isEmpty()) {
                modeloLista.addElement(tarea); // Agrega el objeto al modelo, y la vista se actualiza sola
                txtNuevaTarea.setText("");
                txtNuevaTarea.requestFocus();
            }
        });
    }

    public static void main(String[] args) {
        new GestorTareas().setVisible(true);
    }
}
