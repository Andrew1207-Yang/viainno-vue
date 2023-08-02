<script setup>
    import "../assets/css/spacesgo.css"
</script>

<template>
    <!-- Hero Section -->
    <section class="pt-[80px] hero bg-white">
        <div class="max-w-7xl mx-auto mt-[50px] lg:mt-[80px] text-center">
            <div>
                <h1 class="text-black title">Spaces Go</h1>
                <h1 class="text-gray-500 my-[15px] lg:my-[30px] subtitle">Mange your space flexibly</h1>
            </div>
            <img class="mx-auto mt-[50px] lg:mt-[80px]" src="../assets/img/homego/app_comparison.png" alt="product_image">
        </div>
    </section>

    <!-- App Intro Section -->
    <section>
        <div class="max-w-7xl mx-auto mt-[80px] lg:mt-[180px] mb-[60px]">
            <h1 class="title mx-5">Reimagine Smart Spaces</h1>
            <p class="mt-[20px] mx-5 text-gray-500">Dedicated to researching safe and effective management in the post-COVID era, Spaces Go aims to innovate coworking spaces such as offices, hotels, and co-working spaces to create highly autonomous venue that combines people and technology, while preserving the connection within communities</p>
        </div>
        <div class="max-w-7xl mx-auto xl:grid xl:grid-cols-2 mb-[60px]">
            <div class="card">
                <h3 class="subtitle">Intuitive, Real-time, Portable, <br>Unparalleled User Experience</h3>
                    <p>Intuitive user interface, providing cross-platform management <br> and community building </p>     

                <img src="../assets/img/spacesgo/stats_analysis.JPG" alt="">
            </div>

            <div class="card">
                <h3>Data, Finance, Purchases, Easily <br>Combine Modular Functions</h3>
                    <p>Adjust and combine plethora of functionalities for<br> customized smart space services</p>
                <img src="../assets/img/spacesgo/phone_ui_cropped.png" alt="">
            </div>

            <div class="card">
                <h3>IOT, Autonomy, Efficient, <br>Smart Space Revisioned</h3>
                    <p>Utilize IOT technology to achieve energy efficiency, self-servicing,<br>  and real-time facility status monitoring</p>
                <img class="mx-auto" src="../assets/img/spacesgo/mac_dashboard.png" alt="">
            </div>

            <div class="card">
                <h3>Open source, Cost-effective, Streamline <br>Space Transition</h3>
                    <p>Supports multiple communication protocols, allowing for <br>cost-effective transition to smart spaces </p>
                <img src="../assets/img/spacesgo/pad_ui.png" alt="">
            </div>
        </div>
    </section>
    
    <!-- Product Comparison -->
    <section class="bg-black">
        <div class="tm-[80px] max-w-6xl mx-auto text-center">
            <div class="py-[80px]">
                <h1 class="title text-white">Three Products, Manage It All</h1>
            </div>
            <img class="mx-auto" src="../assets/img/spacesgo/app_comparison.png" alt="">
        </div>
        <div class=" text-white max-w-6xl mx-auto lg:flex justify-between">
            <div class="mx-auto w-[354px] lg:w-[200px] lg:mr-[30px]">
                <p class="paragraph">Assist admin with customer check-in, reservations, user feedback, etc</p>
                <a class="app-cta" href="#">Learn More >
                </a>
            </div>
            <div class="mx-auto sm-text-box w-[354px] lg:w-[230px]">
                <p class="paragraph">Web app for data management, financial analysis and facility status report</p>
                <a class="app-cta" href="#">Learn More >
                </a>
            </div>
            <div class="mx-auto sm-text-box w-[354px] lg:w-[230px] lg:ml-[30px]">
                <p class="paragraph">Provides user with space reservation, IOT control, feedback, etc</p>
                <a class="app-cta" href="#">Learn More >
                </a>
            </div>
        </div>
    </section>

    <!-- Product feature -->
    <section class="bg-black pb-[30px]">
            <div class="py-[100px] text-center mx-auto w-4xl">
                <h3 class="text-white">App Features</h3>
                <h1 class="title text-white mb-[20px]">Spaces Go 功能模組</h1>
                <p>以用戶為中心設計的多項功能，解決管理上的一切需求</p>
            </div>
            <div class=" mb-[10px] max-w-6xl mx-auto">
                <div class="banner">
                    <img src="../assets/img/spacesgo/pad_ui.png" alt="">
                    <div>
                        <ul class="font-bold">
                            <li class="text-teal-500">Events</li>
                            <li class="text-teal-500">Members</li>
                            <li class="text-teal-500">Access</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Event Sign-ups & Sign-ins w/ QR code Access</li>
                            <li>Membership / VIP / Admin Settings</li>
                            <li>Access Settings/ One-time Access Pass</li>
                        </ul>
                    </div>
                </div>
                <div class="banner">
                    <div>
                        <ul class="font-bold">
                            <li class="text-teal-500">Tasks</li>
                            <li class="text-teal-500">Orders</li>
                            <li class="text-teal-500">Discounts</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Mails & Packages / Visitor & Member IDs/ Announcements</li>
                            <li>Order, Billing, Ticketing Management </li>
                            <li>Coupon & Promo Code Binding</li>
                        </ul>
                    </div>
                    <img src="../assets/img/spacesgo/pad_ui.png" alt="">
                </div>
                <div class="banner">
                    <img src="../assets/img/spacesgo/pad_ui.png" alt="">
                    <div>
                        <ul class="font-bold">
                            <li class="text-teal-500">Stat Sheets</li>
                            <li class="text-teal-500">Extensions</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Analytical Dashboard / Calendars/ Facility and Energy Records </li>
                            <li>Supports Communication Protocols and APIs</li>
                        </ul>
                    </div>
                </div>
                <div class="banner">
                    <div>
                        <ul class="font-bold">
                            <li class="text-teal-500">Spaces</li>
                            <li class="text-teal-500">Facilities</li>
                            <li class="text-teal-500">Devices</li>
                            <li class="text-teal-500">IoT</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Terms and Conditions & Partnership Contracts</li>
                            <li>Manage Meeting Rooms, Hotel Rooms & Offices</li>
                            <li>Management & Usage w/ QR code Access</li>
                            <li>Automated Settings & IoT Remote Controlling</li>
                        </ul>
                    </div>
                    <img src="../assets/img/spacesgo/pad_ui.png" alt="">
                </div>
            </div>           
    </section>
    
    <!--Mission statement-->>
    <section class="bg-white">
        <div class="max-w-6xl mx-auto mt-[30px] mb-[60px]">
            <div class="mt-[100px] text-center mx-auto w-4xl">
                <h1 class="title mb-[30px]">People-Centric Smart Spaces</h1>
                <p class="hidden lg:block">In the era of knowledge work, corporations and space owners actively build environments that amplifies traits of team members, striving for advancement through combining technological trends. The means in which smart spaces are designed to balance human and technology has become an essential component of management. </p>
                <br>
                <p>Spaces Go provides operational services such as resource planning, facility monitoring, and customer relationship building. We aim to assist space owners and allow users to self-service and directly interact with ——.By analyzing user data, managers of spaces can make more sophisticated decisions, strengthening services provided and customer satisfaction.</p>
            </div>
            <img src="../assets/img/spacesgo/spacesgo_features.png" alt="">
        </div>
    </section>

     <!-- Colab Section -->
     <section  class="bg-gray-200">
        <div class="max-w-6xl mx-auto pt-[30px]">
            <div class="pt-[50px] text-center mx-auto w-4xl">
                <h1 class="title pb-[30px]">Effective Cases</h1>
            </div>


        </div>
    </section>
</template>