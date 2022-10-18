<template>
    <div :class="$style.Example">
        <div
            class="flex container flex-col"
        >
            <h1
                class="text-[36px] text-[#16bd71] font-bold mb-4 border-b border-[#ababa8]"
            >
                {{ h1 }}
            </h1>
            <NuxtChild />
            <NuxtLink
                v-if="!isRoot"
                :to="rootPath"
                class="text-[18px] text-[#16bd71] hover:text-[#0f4d30] underline mt-6 border-t border-[#ababa8] pt-1 pb-8"
            >
                Return to home page
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            rootPath: this.$route.matched[ 0 ].path
        }
    },

    computed:
    {
        isRoot()
        {
            return this.rootPath === this.$route.path
        },

        title()
        {
            return this.$route.name.replace( /^.*?-/, "" )
        },

        h1()
        {
            return this.isRoot ? "Elements:" : `The ${ this.title } element.`
        }
    }
}
</script>

<style lang="scss" module>

.Example {
    //
}

</style>
