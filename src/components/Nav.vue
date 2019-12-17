<template>
    <!--Main Navigation-->
    <header>
        <!-- Navbar -->
        <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
            <div class="container">
                <!-- Brand -->
                <a class="navbar-brand waves-effect" href="#" target>
                    <strong class="blue-text">CIS</strong>
                </a>

                <!-- Collapse -->
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Links -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left -->
                    <ul class="navbar-nav mr-auto">
                        <router-link to="/" tag="li" class="nav-item">
                            <a class="nav-link waves-effect" href="#">
                                Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </router-link>
                        <router-link to="/moitering" tag="li" class="nav-item">
                            <a class="nav-link waves-effect" href="#" target>moitering</a>
                        </router-link>
                        <router-link to="/user" tag="li" class="nav-item">
                            <a class="nav-link waves-effect" href="#" target>User</a>
                        </router-link>
                    </ul>

                    <!-- Right -->
                    <ul class="navbar-nav nav-flex-icons">
                        <router-link to="/login" tag="li" class="nav-item" v-if="isToken == false">
                            <a href="#" class="nav-link border border-light rounded waves-effect">
                                <i class="fas fa-sign-in-alt"></i>
                            </a>
                        </router-link>

                        <router-link to="/login/signup" tag="li" class="nav-item" v-if="isToken == false">
                            <a href="#" class="nav-link border border-light rounded waves-effect">
                                <i class="fas fa-user-plus"></i>
                            </a>
                        </router-link>
                        <!-- Dropdown -->
                        <li class="nav-item dropdown" v-if="isToken">
                            <a
                                class="nav-link dropdown-toggle"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            ><i class="far fa-address-card"></i></a>
                            <div
                                class="dropdown-menu dropdown-primary"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <a class="dropdown-item" href="#">MyPage</a>
                                <a
                                    class="dropdown-item"
                                    href="#"
                                    @click.prevent="logout()"
                                >Logout</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a
                                href="https://github.com/jephyros"
                                class="nav-link border border-light rounded waves-effect"
                                target="_blank"
                            >
                                <i class="fab fa-github mr-2"></i>GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar -->
    </header>
    <!--Main Navigation-->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    created() {},

    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            token: "auth/GET_TOKEN"
        }),
        isToken: function() {
            
            if (this.token) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        ...mapActions({
            LOGOUT_TOKEN: "auth/LOGOUT_TOKEN"
        }),
        logout : function() {
            this.LOGOUT_TOKEN();
            this.$router.replace("/")
        }
    }
};
</script>