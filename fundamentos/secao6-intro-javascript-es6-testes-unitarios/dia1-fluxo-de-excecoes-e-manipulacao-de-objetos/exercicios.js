// Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. Para isso, use o seguinte código:

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const nameR = order.name;
    const telefone = order.phoneNumber;
    const adress = order.address.street;
    const number = order.address.number;
    const apt = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${nameR}, telefone: ${telefone}, R. ${adress}, Nº: ${number}, AP: ${apt}`);

};

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva'
    order.payment.total = 50
    const nome = order.name;
    const total = order.payment.total;
    const pizzas = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;

    console.log(`Olá ${nome}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$${total}`);

};

orderModifier(order);