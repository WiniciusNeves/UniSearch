import { Text, Recentes, Retangulo } from "./styles";

const Recents = () => (

    <Recentes>
        <Text style={{ fontSize: 17, color: '#00345C', fontFamily: 'Poppins-Bold', marginLeft: 20, marginTop: 40, opacity: 100 }}>
            Recentes
        </Text>
        <Retangulo>
            <Text style={{ fontSize: 20, color: '#00345C', fontWeight: 'bold' }}>
                images
            </Text>
            <Text style={{ fontSize: 20, color: '#00345C', marginLeft: 50, fontWeight: 'bold', alignItems: 'center' }}>
                Titulo
            </Text>
        </Retangulo>
    </Recentes>
);

export default Recents;