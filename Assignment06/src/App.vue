<template>
    <div class="">

        <body>
            <div class="header">
                <div class="logo">
                    <h3>Best City Guide</h3>
                </div>
                <div class="menu">
                    <div>{{ menu[0] }}</div>
                    <div>{{ menu[1] }}</div>
                    <div>{{ menu[2] }}</div>
                    <div>{{ menu[3] }}</div>
           
                </div>
            </div>
            <div class="image">
                <img :src="city" alt="City Image">
                <h3>The Best City</h3>
                <p>The best drinks and in the best city ever.</p>
            </div>
            <div class="container ">
                <div class="row body-desc">
                    <div class="col-md-4 col-sm-6 mt-5">
                        <div class="row ">
                            <h3>Welcome!</h3>
                            <div class="col">
                                <p>{{ desc1 }}</p>
                            </div>
                            <div class="col">
                                <p>{{ desc2 }}</p>
                            </div>
                            <div class="col">
                                <p>{{ desc3 }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="row ">
                            <h3>Great food</h3>
                            <div class="col">
                                <div class="img-center">
                                    <img :src="food" alt="">
                                </div>
                            </div>
                            <div class="col">
                                <p>{{ desc3 }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div class="row ">
                            <h3>How to get here</h3>
                            <div class="col">
                                <p>{{ desc1 }}</p>
                            </div>
                            <div class="col">
                                <p>{{ desc2 }}</p>
                            </div>
                            <div class="col">
                                <p>{{ desc3 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">{{ copy }} </div>
        </body>
    </div>
</template>

<script>
export default {
    data() {
        return {
            copy: "@ 2024 Residents of the Best City ever.",
            city:'../src/assets/images/city.svg',
            food: '../src/assets/images/food.svg',
            menu: [
                'ICE CREAM',
                'DONUTS',
                'TEA',
                'COFFE'
            ],
            
            title: "Welcome!",
            desc1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tenetur exercitationem nihil quae libero incidunt corrupti expedita omnis quas illum.',
            desc2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, labore doloremque, ex quos quam consequuntur facilis quis nesciunt fugit officia facere esse tenetur officiis quo consequatur vero quaerat recusandae voluptatem pariatur eos consectetur! Deserunt, soluta. Recusandae officiis asperiores, quas perspiciatis magnam dignissimos ipsum saepe pariatur id laborum optio. Quo, laudantium.',
            desc3: 'Lorem ipsum dolor Architecto, labore doloremque, ex quos quam consequuntur facilis quis nesciunt fugit officia facere esse tenetur officiis quo consequatur vero quaerat recusandae voluptatem pariatur eos consectetur! Deserunt, soluta. Recusandae officiis asperiores, quas perspiciatis magnam dignissimos ipsum saepe pariatur id laborum optio. Quo, laudantium.',
            
        
        }
    }
}
</script>

<style>
.body-desc{
    display:flex;
}
body {
    padding: 0;
    margin: 0;
}

.header {
    padding: 0rem 2rem;
    background: white !important;
    color: #11e7e0;
    display: flex;
    justify-content: space-between;
    align-items: center !important;
    text-align: center;
}

.menu {

    display: flex;
    justify-content: space-around;
}

.menu div {
    padding-right: 2rem;

}

.image {
    display: flex;
    color: white;
    height: 50vh;
    background: #11e7e0;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: center;
}

img {
    width: 15%;

}

h3 {
    font-weight: 600;
}

.img-center img {
    width: 100%;
    margin: auto;
    margin-bottom: 1rem;
}

.row {
    padding: 15px;
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    background-color: #d1c0c0;
}

@media only screen and (max-width: 768px) {
    img {
        width: 20%;

    }
}

@media only screen and (max-width: 540px) {
    .header {
        display: block;
        margin-bottom: 1rem;
    }

    img {
        width: 35%;

    }
}
</style>