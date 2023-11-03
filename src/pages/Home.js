import React, {useEffect, useState} from "react";
import {MainLayout} from "../layouts/MainLayout";
import "./Home.css"
import {Card, CardBody, Text, Button} from "@chakra-ui/react";

const postsHardcoded = [
    {
        title: "Крах криптокороля. В США суд признал виновным главу биржи FTX Сэма Бэнкмана-Фрида",
        image: "https://cdn.nur.kz/images/1120x630/395ad0f729276ac4.webp?version=1",
        description: "Суд в США признал виновным в мошенничестве, обмане клиентов и отмывании денег Сэма Бэнкмана-Фрида — в прошлом руководителя FTX, одной из крупнейших в мире криптовалютных бирж. Читайте больше: https://www.nur.kz/world/2044076-krah-kriptokorolya-v-ssha-sud-priznal-vinovnym-glavu-birzhi-ftx-sema-benkmana-frida/"
    },
    {
        title: "Эрдоган подарил Токаеву электромобиль турецкого производства (фото, видео)",
        image: "https://cdn.nur.kz/images/1120x630/13703e0a4a55df4b.webp?version=1",
        description: "Главе государства вручили ключи от турецкого электромобиля TOGG - этот подарок сделал глава Турции Реджеп Тайип Эрдоган, передает NUR.KZ со ссылкой на Акорду. Читайте больше: https://www.nur.kz/politics/universe/2044063-erdogan-podaril-tokaevu-elektromobil-turetskogo-proizvodstva/"
    },
    {
        title: "Токаев провел переговоры с Эрдоганом в Астане",
        image: "https://cdn.nur.kz/images/1120x630/13703e0a4a55df4b.webp?version=1",
        description: "Главе государства вручили ключи от турецкого электромобиля TOGG - этот подарок сделал глава Турции Реджеп Тайип Эрдоган, передает NUR.KZ со ссылкой на Акорду. Читайте больше: https://www.nur.kz/politics/universe/2044063-erdogan-podaril-tokaevu-elektromobil-turetskogo-proizvodstva/"
    },
    {
        title: "Эрдоган подарил Токаеву электромобиль турецкого производства (фото, видео)",
        image: "https://cdn.nur.kz/images/1120x630/1fd4f9ccc7e93f52.webp?version=1",
        description: "Главе государства вручили ключи от турецкого электромобиля TOGG - этот подарок сделал глава Турции Реджеп Тайип Эрдоган, передает NUR.KZ со ссылкой на Акорду. Читайте больше: https://www.nur.kz/politics/universe/2044063-erdogan-podaril-tokaevu-elektromobil-turetskogo-proizvodstva/"
    },
]

const HomePage = () => {
    const [posts, setPosts] = useState(postsHardcoded)

    useEffect(() => {
        const localStoragePosts = JSON.parse(localStorage.getItem("posts"))
        if (localStoragePosts) {
            setPosts([...postsHardcoded, ...localStoragePosts])
        }
    }, [])

    return (
        <MainLayout>
            <h1>Twitter</h1>
            <div className="listOfPosts">
                {posts.map((item, inedx) => (
                    <Card style={{width: "100%"}}>
                        <img  src={item.image} />
                        <CardBody>
                            <Text>{item.title}</Text>
                            <Text>
                                {item.description}
                            </Text>
                            <Button colorScheme="teal">Read detiled</Button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </MainLayout>
    )
}

export {HomePage}