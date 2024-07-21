<template>
    <div class="MainHeader">
        <div class="ProfileBlock">
            <img
                src="@/assets/imgs/pics/vitor2.png"
                class="profile-pic"
            />
            <div class="profile-infos">
                <a class="name"> Vitor Alves</a><br>
                <a class="role"> Front-end Developer</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderMain'
    }
</script>

<style lang="stylus">
    @import './header-main.styl';
</style>