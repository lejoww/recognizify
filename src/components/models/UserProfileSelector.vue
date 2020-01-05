<template>
    <div class="userProfileSelectorContainer">
        <div style="display: flex;">
            <div class="userProfileSelectorPicture">
                <img :src="picture ? picture : require('@/assets/ilustrations/profile.png')" alt="">
            </div>
            <div>
                <h6 style="margin: 0; font-family: 'cooper_hewittsemibold">{{name}}</h6>
                <span class="userProfileSelectorBio">{{bio.length < 35 ? `${bio}` : `${bio.slice(0, 35)}...`}}</span>
            </div>
        </div>
        <div>
            <a :href="`/@${user}`" class="btn btn-outline-dark">Ver perfil</a>
        </div>
    </div>
</template>
<style scoped>

    .userProfileSelectorContainer {
        padding: 1em;
        border: 1px solid #e9e9e9;
        background: #fafafa;
        border-radius: 4px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
    }

    .userProfileSelectorPicture {
        width: 32px;
        height: 32px;
        border-radius: 18px;
        overflow: hidden;
        margin-right: 12px;
    }

    .userProfileSelectorPicture img {
        width: 100%;
    }

    .userProfileSelectorBio {
        font-size: 13px
    }

</style>
<script>
export default {
    props: [
        'name',
        'bio',
        'picture',
        'user'
    ]
}
</script>