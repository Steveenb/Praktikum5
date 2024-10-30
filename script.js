$(document).ready(function () {
    // Toggle sidebar and main content when the hamburger bar is clicked
    $('.menu-icon').click(function () {
        $('.sidebar').toggleClass('active');
        $('.main-content').toggleClass('active');
    });

    // Hide sidebar when mouse leaves
    $('.sidebar').mouseleave(function () {
        if (!$('.menu-icon').is(':hover')) {
            $('.sidebar').removeClass('active');
            $('.main-content').removeClass('active');
        }
    });

    // Show sidebar when mouse enters
    $('.sidebar').mouseenter(function () {
        $('.sidebar').addClass('active');
        $('.main-content').addClass('active');
    });

    // Initialize animated elements with initial styles
    const elementsToAnimate = [
        '.card',
        '.ap-balance',
        '.ar-balance',
        '.income-percentage',
        '.income-budget-percentage',
        '.expenses-budget-percentage',
        '.chart-container',
        '.chart',
        '.budget-container'
    ];

    // Initial styles for animations
    $(elementsToAnimate.join(', ')).css({
        position: 'relative',
        bottom: '-50px',
        opacity: 0
    });

    // Animate elements sequentially
    $(elementsToAnimate.join(', ')).each(function (index) {
        $(this).delay(300 * index).animate({
            bottom: '0',
            opacity: 1
        }, 1000);
    });

    // Toggle dropdown menu visibility
    $('.dropdown').click(function () {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    // Hover effect for charts and budget containers
    $('.chart, .budget-container').hover(
        function () {
            $(this).fadeTo(300, 0.7);
        },
        function () {
            $(this).fadeTo(300, 1);
        }
    );

    // Logo text animation on hover
    $('.logo-name').hover(function () {
        $(this).animate({
            fontSize: '30px'
        }, 400);
    }, function () {
        $(this).animate({
            fontSize: '25px'
        }, 400);
    });

    // Show/hide profile image on click
    $('.profile-icon').click(function () {
        $(this).find('img').toggle(500);
    });

    // Initialize Bar Chart
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Initialize first Pie Chart
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Initialize second Pie Chart
    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
