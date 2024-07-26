<template>
    <div class="MainHeader">
        <div class="ProfileBlock">
            <img
                src="@/assets/imgs/pics/vitor2.png"
                class="profile-pic"
            />
            <div class="profile-infos">
                <a class="name"> {{ userName }}</a><br>
                <a class="role"> {{ userRole }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderMain',
        data() {
            return {
                userName: 'Vitor Alves',
                userRole: 'Front-end Developer'
            }
        }
    }
</script>

<style lang="stylus">
    @import './header-main.styl';
</style>