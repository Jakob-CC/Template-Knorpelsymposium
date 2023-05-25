let output = "";

for (let i = 1; i <= 60; i++) {
    output += `
    <!-- ${i} / PICTURE  -->
    <figure class="col-xs-12 col-sm-12 col-md-6 col-lg-4 annex-img split-section" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
        <a href="img/gallery/${i}.jpg" class="gallery-link small" data-image="img/gallery/${i}.jpg" itemprop="contentUrl" data-size="2624x3936">
            <img src="img/gallery/${i}.jpg" itemprop="thumbnail" alt="This is my work" class="img-responsive gallery-img small-square" />
        </a>

        <figcaption itemprop="caption description">
            <div class="photo-details">
                <i class="icon ion-plus-circled"></i>
            </div>
        </figcaption>
    </figure>`;
}

console.log(output);