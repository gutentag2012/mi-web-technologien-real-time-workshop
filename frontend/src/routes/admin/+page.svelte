<script lang="ts">
    import {goto} from "$app/navigation";
    import {authToken} from "$lib";
    import * as env from '$env/static/public'

    let username = ""
    let password = ""

    const handleSubmit= async (event: Event) => {
        event.preventDefault()
      const {token} = await fetch(`${env.PUBLIC_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
      }).then(res => res.json())
      if(!token) return
      authToken.set(token)
      await goto('/')
    }
</script>

<svelte:head>
    <title>Presentation</title>
</svelte:head>

<form on:submit={handleSubmit}>
    <label>
        Username
        <input type="text" bind:value={username} placeholder="Username">
    </label>
    <label>
        Password
        <input type="password" bind:value={password} placeholder="Password">
    </label>
    <button type="submit">Submit</button>
</form>
