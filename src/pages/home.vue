<template>
    <div>
        <Top></Top>
        <Bottombar></Bottombar>
        <RotationChart></RotationChart>
        <Classification></Classification>
        <Headlines></Headlines>
        <RushToBuy></RushToBuy>
    </div>
    
</template>
<script>
    import Bottombar from "../components/bottombar/bottombar"
    import Top from "../components/top/top"
    import RotationChart from "../components/RotationChart/RotationChart"
    import Classification from "../components/classification/classification"
    import Headlines from "../components/headlines/headlines"
    import RushToBuy from "../components/rushToBuy/rushToBuy"
    export default {
        components:{
            Bottombar,
            Top,
            RotationChart,
            Classification,
            Headlines,
            RushToBuy
        }
    }
</script>
<style>
    body{
        background: #f4f4f4;
    }
</style>