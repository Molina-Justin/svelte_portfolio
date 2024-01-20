<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FiGrid from 'svelte-icons-pack/fi/FiGrid';
	import IoClose from 'svelte-icons-pack/io/IoClose';

	import BiHomeAlt from 'svelte-icons-pack/bi/BiHomeAlt';
	import BsPerson from 'svelte-icons-pack/bs/BsPerson';
	import BiNotepad from 'svelte-icons-pack/bi/BiNotepad';
	import CgWebsite from 'svelte-icons-pack/cg/CgWebsite';

	let NAV_LINKS = [
		{ href: '/', key: 'home', label: 'Home' },
		{ href: '/', key: 'about', label: 'About' },
		{ href: '/', key: 'qualifications', label: 'Qualifications' },
		{ href: '/', key: 'projects', label: 'Projects' }
	];
	let isNavOpen = false;

	function toggleNav() {
		isNavOpen = !isNavOpen;
	}
</script>

<nav class="max_container padding_container flex_between">
	<h1 class="text-lg font-medium">Justin Molina</h1>
	<ul class="hidden md:flex text-title font-medium gap-6">
		{#each NAV_LINKS as link}
			<li>
				<a href={link.href} class="hover:text-black">{link.label}</a>
			</li>
		{/each}
	</ul>

	<button class="md:hidden z-50" on:click={toggleNav}>
		{#if isNavOpen}
			<Icon src={IoClose} size="28" color="black" />
		{:else}
			<Icon src={FiGrid} size="24" color="black" />
		{/if}
	</button>

	{#if isNavOpen}
		<div
			class="bg-white fixed flex top-0 left-0 w-screen h-screen max_container padding_container items-center"
		>
			<ul class="flex flex-col text-title content-center justify-items-center font-medium gap-6">
				{#each NAV_LINKS as link}
					<li>
						<a href={link.href} class="hover:text-black">{link.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
