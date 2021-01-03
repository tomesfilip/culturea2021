<template>
  <Container class="lg:px-28 md:px-20 text-center">
    <h2 class="uppercase text-4xl">Náš team</h2>
    <div class="team-members flex justify-space-around items-center mt-16 space-x-20">
      <TeamMember 
        v-for="(teamMember, name) in teamMembers.slice(0,4)" 
        :key="name" 
      />
    </div>
  
  </Container>

</template>

<script>
import Container from './Container.vue'
import TeamMember from './TeamMember.vue'

export default {
  components: { TeamMember, Container },
  data() {
    return {
      teamMembers: [
        {
          photo: '',
          name: 'Lucia Novotná'
        },
        {
          photo: '',
          name: 'Michaela Eliášová'
        },
        {
          photo: '',
          name: 'Polina Rodionova'
        },
        {
          photo: '',
          name: 'Tereza Brlicová'
        },
        {
          photo: '',
          name: 'Filip Tomeš'
        },
        {
          photo: '',
          name: ''
        },
        {
          photo: '',
          name: ''
        },
        {
          photo: '',
          name: ''
        }
      ]
    }
  }
}
</script>

<style>

</style>