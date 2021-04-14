<template>
<p>{{messages}}</p>

</template>

<script>
import ttlfile from './university.ttl';
export default {
    name: "graph",

    data: function() {
        console.log(ttlfile);
        return{messages: ttlfile}}
}
</script>

<style></style>
