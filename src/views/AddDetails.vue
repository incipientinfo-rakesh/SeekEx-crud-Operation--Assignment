<template>
<div>
    <div class="container  mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-danger fw-bold">Add User</p>
                 <p>Lorem ipsum dolor sit amet, consecterur adipisicing elit. Eum labore, laboriosoma obacasd queid.</p>
            </div>
        </div>
    </div>

    <div class="container" mt-3>
        <div class="row">
            <div class="col-md-4">
               <form @submit.prevent="submitCreate()">
                    <div class="mb-2">
                        <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.email" type="text" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.photo" type="text" class="form-control" placeholder="Image">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.dob" type="text" class="form-control" placeholder="Date of Birth">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile Number">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.country" type="text" class="form-control" placeholder="Country Name">
                    </div>
                    <div class="mb-2">
                        <input  type="submit" class="btn btn-success" value="Create">
                    </div>
               </form>
            </div>
            <div class="col-md-4">
                <!-- <img src="https://images.unsplash.com/photo-1663097606407-afacf0cbec23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="rakesh" class="user-img" /> -->
                <img :src="contact.photo" alt="user image" class="user-img" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {ContactService} from "@/services/ContactService";
export default {
  name: 'AddDetails',

  data: () => ({
        contact:{
            name: '',
            email: '',
            photo: '',
            dob: '',
            country: '',
            mobile: '',
        }
  }),
  methods: {
    submitCreate: async function (){
        try{
            let response = await ContactService.createContact(this.contact);
            if(response){
                return this.$router.push('/');
            }
            else{
                return this.$router.push('/add');
            }
        }
        catch(error){
            console.log(error);
        }
    }
  }
}
</script>