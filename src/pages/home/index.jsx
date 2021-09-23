import React, { useState } from "react";
import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from "./styles";


import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from "../../components";

import TextField, { Input } from "@material/react-text-field";

import MaterialIcon from "@material/react-material-icon";


const Home = () => {
    
    const [ inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null)
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleChange(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo restaurante"/>
                    <TextField
                        label='Pesquisar Restaurantes'
                        
                        //onTrailingIconSelect={() => this.setState({value : ''})}
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}

                    ><Input
                        value={inputValue}
                        onKeyPress={handleChange}
                        onChange={(e) => setInputValue(e.target.value)}/>
                    </TextField>
                    <CarouselTitle>
                        Na Sua Área
                    </CarouselTitle>
                    <Carousel { ...settings}>
                        <Card photo={restaurante} title="nome"/>
                        <Card photo={restaurante} title="nome" />
                        <Card photo={restaurante} title="nome" />
                        <Card photo={restaurante} title="nome" />
                        <Card photo={restaurante} title="nome" />
                        <Card photo={restaurante} title="nome" />
                        <Card photo={restaurante} title="nome" />
                    </Carousel>
                </Search>
                <RestaurantCard/>
            </Container>
            <Map query={query} />
            {/*<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />*/}
        </Wrapper>
    )
}

export default Home;