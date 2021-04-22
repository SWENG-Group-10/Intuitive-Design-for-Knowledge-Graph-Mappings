<template>
<v-card flat tile height="400">
    <!--
        For WebVowl to automatically display the uploaded ontology, The ontology must be available on a publicaly accessable webpage.
        The page WebVowl url contains many ways for the ontology to be accessed, including the #file method. This method however requires 
        the file to have been put into the WebVowl instance's cache.

        A browser is not allowed to alter the file system of the server, ie. replace https://sweng-group-10.github.io/Intuitive-Design-for-Knowledge-Graph-Mappings/university.ttl with the uploaded file. This has been tested against using blobs,
        localstorage and axios. Browsers are allowed to alter the files within their own instance of the webpage, meaning that when 
        WebVowl attempts to access the page there has been no changes.

        A possible solution is to run a local instance of the WebVowl code available at : https://github.com/VisualDataWeb/WebVOWL
        The reason this is not being implented is the GH pages system the site is hosted on does not offer enough ports for the systems to
        work simultaniously.

        -->
    <object type="text/html" width="100%" height="400px" data="http://www.visualdataweb.de/webvowl/#iri=https://sweng-group-10.github.io/Intuitive-Design-for-Knowledge-Graph-Mappings/university.ttl">
    </object>
</v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
