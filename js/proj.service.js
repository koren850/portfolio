'use strict'

$(document).ready(init);
function init() {
    $('.contact-me').click(sendMail)
    renderProjet();
    renderModal();
}
var gcounter = 1;
const gProjects = [
    _createProject(
        'MINESWEEPER',
        'My version of the original minesweeper',
        'this is my first big project started from scratch i added some unique features and design',
        'https://koren850.github.io/Minesweeper-Koren-Aharon/',
        '1637846994000',
        ['Game']
    ),
    _createProject(
        'PACMAN',
        'My version of the original pacman',
        'this is my version of pacman with added unique features and design',
        '#',
        '1637931654000',
        ['Game']
    ),
    _createProject(
        'TOUCH-NUMS',
        'Touch the nums in order as fast as you can!',
        'This game is a speed game try break your record!',
        '#',
        '1638277254000',
        ['Game']
    )
];



function _createProject(name, title, desc, url, publish, labels) {
    return {
        id: name.toLowerCase(),
        name: name,
        title: title,
        desc: desc,
        url: url,
        publish: publish,
        labels: labels,
        modalId: gcounter++
    }
}

function renderProjet() {

    var strHTML = gProjects.map((proj) => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal${proj.modalId}"
            >
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img
                    class="img-fluid"
                    src="img/portfolio/0${proj.modalId}-thumbnail.jpg"
                    alt=""
                />
            </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text">${proj.labels}</p>
            </div>
        </div>`
    })
    $('.to-render').html(strHTML)
}


function renderModal() {
    var strHTML = gProjects.map((proj) => {
        return `<div
			class="portfolio-modal modal fade"
			id="portfolioModal${proj.modalId}"
			tabindex="-1"
			role="dialog"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="close-modal" data-dismiss="modal">
						<div class="lr">
							<div class="rl"></div>
						</div>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-lg-8 mx-auto">
								<div class="modal-body">
									<!-- Project Details Go Here -->
									<h2>${proj.name}</h2>
									<p class="item-intro text">
										${proj.title}
									</p>
									<img
										class="img-fluid d-block mx-auto"
										src="img/portfolio/0${proj.modalId}-full.jpg"
										alt=""
									/>
									<p>
										${proj.desc}
									</p>
									<ul class="list-inline">
										<li>Date: ${new Date(+proj.publish)}</li >
										<li>
											<a
												target="_blank"
												href="${proj.url}"
											>
												<span>Game Link</span>
											</a>
										</li>
										<li>Category: ${proj.labels}</li>
									</ul >
        <button
            class="btn btn-xl"
            data-dismiss="modal"
            type="button"
        >
            <i class="fa fa-times"></i>
            Close Project
        </button>
								</div >
							</div >
						</div >
					</div >
				</div >
			</div >
		</div > `
    })
    $('.modal-render').html(strHTML)

}


function sendMail() {
    var email = $('.email').val();
    var subject = $('.subject').val();
    var messege = $('.messege').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${messege}
`)
}

