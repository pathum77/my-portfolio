<template>
    <div>
        <div class="main">
            <div class="navigation">
                <div class="lg">
                    <div class="logo-box">
                        <img class="img-logo" src="../assets/images/logo.png" alt="">
                    </div>
                    <a class="a-link" href="/#home">
                        <p class="txt-link">Home</p>
                    </a>
                    <a class="a-link" href="/#services">
                        <p class="txt-link">Services</p>
                    </a>
                    <a class="a-link" href="/#clients">
                        <p class="txt-link">Clients</p>
                    </a>
                    <a class="a-link" href="/#contact">
                        <p class="txt-link">Contact</p>
                    </a>
                    <div class="social-box">
                        <a href="https://www.facebook.com/pathum.madusankaa/" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/fb.png" alt="">
                        </a>
                        <a class="a-social" href="https://www.linkedin.com/in/pathum-madusanka/" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/linkedin.png" alt="">
                        </a>
                        <a class="a-social" href="https://wa.me/94786937253" target="_blank">
                            <img class="img-social-icon" src="../assets/images/icons/wa.png" alt="">
                        </a>
                    </div>
                </div>
                <transition name="navi-trans">
                    <div v-if="showNavBar" class="sm res-p-y">
                        <button @click="mobileNavigationIsVisible = true" class="btn-menu">
                            <img class="img-menu" src="../assets/images/icons/menu.png" alt="">
                        </button>
                    </div>
                </transition>
                <transition name="mob-navigation">
                    <div v-if="mobileNavigationIsVisible" @click="mobileNavigationIsVisible = false;"
                        class="navigation-sm-main">
                        <div @click.stop class="navigation-sm">
                            <div class="close-wrp">
                                <button @click="mobileNavigationIsVisible = false;"
                                    class="btn-close btn-close-white"></button>
                            </div>
                            <div class="logo-box">
                                <img class="img-logo" src="../assets/images/logo.png" alt="">
                            </div>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#home">
                                <p class="txt-link">Home</p>
                            </a>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#services">
                                <p class="txt-link">Services</p>
                            </a>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#clients">
                                <p class="txt-link">Clients</p>
                            </a>
                            <a class="a-link" @click="mobileNavigationIsVisible = false;" href="/#contact">
                                <p class="txt-link">Contact</p>
                            </a>
                            <div class="social-box">
                                <a href="https://www.facebook.com/pathum.madusankaa/" target="_blank">
                                    <img class="img-social-icon" src="../assets/images/icons/fb.png" alt="">
                                </a>
                                <a class="a-social" href="https://www.linkedin.com/in/pathum-madusanka/" target="_blank">
                                    <img class="img-social-icon" src="../assets/images/icons/linkedin.png" alt="">
                                </a>
                                <a class="a-social" href="https://wa.me/94786937253" target="_blank">
                                    <img class="img-social-icon" src="../assets/images/icons/wa.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="bg-dark-container">
                <div class="content-container">
                    <div class="content-left">
                        <div class="title-container">
                            <div class="title-box">
                                <h3>About</h3>
                            </div>
                        </div>
                        <p class="sub-title">
                            Since embarking on my journey in the IT industry in 2019, I have accumulated over 3 years of
                            comprehensive experience as a Software Engineer at esteemed IT firms and as a dedicated
                            freelancer. My portfolio boasts a diverse range of modern designs spanning from mobile
                            applications to web interfaces. I've crafted innovative solutions for various sectors including
                            eCommerce, social networking, finance, education, and more. Whether it's an app for a bustling
                            restaurant, an online news magazine, or a cutting-edge startup, my commitment remains
                            unyielding: to empower my clients in transforming their visions into reality. I take immense
                            pride in delivering avant-garde results, ensuring my clients reach their objectives with
                            confidence and ease. Let's collaborate and shape the future, one design at a time.
                        </p>
                        <p class="signature">Pathum</p>
                    </div>
                    <div class="content-right">
                        <img src="../assets/images/backgrounds/bg-person.png" alt="">
                        <div class="content-right-img-fade-box"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showNavBar: true,
            mobileNavigationIsVisible: false,
        }
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > this.lastScrollTop) {
                this.showNavBar = false;
            } else {
                this.showNavBar = true;
            }
            this.lastScrollTop = st <= 0 ? 0 : st;
        },
    }
}
</script>
<style scoped>
h3 {
    font-weight: 900;
    color: white;
    font-family: 'YouthBrushDaylight';
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    font-size: 80px;
    line-height: 43px;
    margin-left: 15px;
    z-index: 1;
}

.circle {
    width: 35px;
    height: 35px;
    padding: 5px 0 0 15px;
    background-color: #732424;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
}

.a-link {
    margin-bottom: 20px;
    margin-left: 7px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
}

.main {
    width: 100%;
    height: 100vh;
    /* background-image: url('../assets/images/backgrounds/bg-main-banner.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    position: relative;
    overflow: hidden;
}

.navigation {
    padding: 50px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
}

.logo-box {
    width: 100px;
    margin-bottom: 50px;
}

.img-logo {
    width: 100%;
}

.bg-dark-container {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    position: relative;
}

.img-link-icon {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    color: white;
}

.txt-link {
    padding: 0;
    margin: 0;
    font-size: 20px;
}

.social-box {
    width: 120px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}

.a-social {
    margin-bottom: 20px;
}

.img-social-icon {
    max-height: 30px;
}

.content-container {
    height: 100%;
    padding: 0 250px;
    display: flex;
    align-items: center;
}

.title {
    margin: 0;
    font-size: 80px;
    color: white;
    font-weight: 900;
}

.divider {
    width: 300px;
    height: 1px;
    margin-bottom: 30px;
    background-color: white;
}

.sub-title-box {
    display: flex;
    align-items: center;
}

.point {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: white;
    flex-shrink: 0;
}

.col-lg-5 {
    position: relative;
}

.content-right {
    width: 300px;
    padding-bottom: 100px;
    position: relative;
    flex-shrink: 0;
}

.content-right img {
    width: 100%;
}

.content-right-img-fade-box {
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.142), rgba(0, 0, 0, 0.873));
    position: absolute;
    bottom: 0;
    left: 0;
}

.sub-title {
    margin: 0;
    color: white;
    font-weight: bold;
}

.signature {
    margin-top: 120px;
    font-size: 30px;
    font-family: 'meadows';
    text-align: right;
    color: white;
    transform: rotate(-10deg);
}

.sm,
.navigation-sm-main {
    display: none;
}

.border-container {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
    z-index: 1;
}

.img-border {
    width: 100%;
}

.title-container {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
}

.title-box {
    position: relative;
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 1100px) {
    .content-container {
        padding: 0;
        padding-left: 200px;
    }

    .content-left {
        max-width: 50%;
    }
}

@media only screen and (max-width: 991px) {
    .title {
        font-size: 65px;
    }

    .content-container {
        padding-right: 200px;
    }

    .sub-title {
        text-align: center;
    }

    .content-right {
        display: none;
    }

    .content-left {
        max-width: 100%;
    }
}

@media only screen and (max-width: 767px) {
    .title {
        font-size: 50px;
    }

    .divider {
        margin-bottom: 10px;
    }

    .content-container {
        padding: 10px;
    }

    .sm {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .navi-trans-enter-from,
    .navi-trans-leave-to {
        top: -70px;
    }

    .navi-trans-enter-active,
    .navi-trans-leave-active {
        transition: all .3s ease;
    }

    .btn-menu {
        background-color: transparent;
        border: none;
    }

    .img-menu {
        width: 50px;
    }

    .navigation-sm-main {
        display: block;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }

    .mob-navigation-enter-from,
    .mob-navigation-leave-to {
        width: 0%;
        opacity: 0;
    }

    .mob-navigation-enter-active,
    .mob-navigation-leave-active {
        transition: all 400ms;
    }

    .navigation-sm {
        max-width: 570px;
        height: 100vh;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: black;
        position: relative;
    }

    .btn-close {
        margin-top: 20px;
        margin-right: 20px;
        position: absolute;
        top: 0;
        right: 0;
    }

    .lg {
        display: none;
    }
}

@media only screen and (max-width: 575px) {

    .content-container {
        padding-top: 50px;
    }

    h3 {
        font-size: 50px;
    }

    .sm {
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .img-menu {
        width: 40px;
    }

    .title {
        font-size: 28px;
    }

    .divider {
        width: 200px;
    }

    .sub-title-box {
        flex-direction: column;
    }

    .signature {
        margin-top: 50px;
    }

    .sub-title {
        font-size: 13px;
    }
}
</style>