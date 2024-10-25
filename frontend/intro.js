/*<section id="section__activity" class="fadeInOut">
    <div class="column__1 flex__align__c">
      <div class="width__60 text__align__c">
        <h3>{{ item.activityH3 }}</h3>
        <div>
          {{ item.activityH2 | safe }}
        </div>
        <h4>{{ item.activityH4 }}</h4>
        <p>{{ item.activityRichText | safe }}</p>
        <a>{{ item.activityBtn }}</a>
      </div>
    </div>
  </section>

  <section id="section__divider" class="fadeInOut">
    <div class="column__1">
      {%if item.dividerImg%}
      <picture>
        {%for format, images in item.dividerImg%}
        <source
          srcset="{{ images | srcset }}"
          sizes="(max-width: 900px) 100vw, 900px"
          type="image/{{ format }}"
        />
        {%endfor%}
        <img
          src="{{ item.dividerImg.jpeg[0].url }}"
          alt="{{ item.dividerImg1Alt }}"
        />
      </picture>
      {%endif%}
    </div>
  </section>

  <section id="section__concept" class="pad__all__5 fadeInOut">
    <div class="column__1 flex__align__c">
      <div class="width__30 text__align__c">
        <h3 class="text__align__c">{{ item.conceptH3 }}</h3>
        <div>
          {{ item.conceptH2 | safe }}
        </div>
        <h4>{{ item.conceptH4 }}</h4>
        <p>{{ item.conceptRichText | safe }}</p>
      </div>
    </div>
    {% if item.conceptImg2 %}
    <picture class="concept__picture__concept1 width__30">
      {% for format, images in item.conceptImg2 %}
      <source
        srcset="{{ images | srcset }}"
        sizes="(max-width: 600px) 100vw, 600px"
        type="image/{{ format }}"
      />
      {% endfor %}
      <img
        src="{{ item.conceptImg2.jpeg[0].url }}"
        alt="{{ item.conceptImg2Alt }}"
      />
    </picture>
    {% endif %} {% if item.conceptImg1 %}
    <picture class="concept__picture__concept2 width__30">
      {% for format, images in item.conceptImg1 %}
      <source
        srcset="{{ images | srcset }}"
        sizes="(max-width: 900px) 100vw, 900px"
        type="image/{{ format }}"
      />
      {% endfor %}
      <img
        src="{{ item.conceptImg1.jpeg[0].url }}"
        alt="{{ item.conceptImg1Alt }}"
      />
    </picture>
    {% endif %}
  </section>

  <section id="section__placeToBe" class="fadeInOut">
    <div class="column__1">
      <div>
        <div>
          {{ item.toBeH2 | safe }}
        </div>
      </div>   
        <ul role='list'>
            {% for gallery in item.toBeImg %}
          <li>
            <picture>
              {% for format, images in gallery %}
              <source
                srcset="{{ images | srcset }}"
                sizes="(max-width: 1200px) 100vw, 1200px"
                type="image/{{ format }}"
              />
              {% endfor %}
              <img
                src="{{ gallery.webp[0].url }}"
                alt="{{ gallery.alt.alt }}"
              />
            </picture>
          </li>
            {% endfor %}
        </ul>
    </div>
  </section>

  <section id="section__location" class="fadeInOut">
    <div class="column__2">
      <div class="col__left">
        <h3>{{ item.locationH3 }}</h3>
        <div>
          <h2>{{ item.locationH2 | safe }}</h2>
        </div>
        <h4>{{ item.locationH4 }}</h4>
        <p>{{ item.locationRichText | safe }}</p>
      </div>
      <div class="col__right">
        {%if item.locationMapImg%}
        <picture>
          {%for format, images in item.locationMapImg%}
          <source
            srcset="{{ images | srcset }}"
            sizes="(max-width: 900px) 100vw, 900px"
            type="image/{{ format }}"
          />
          {%endfor%}
          <img
            src="{{ item.locationMapImg.jpeg[0].url }}"
            alt="{{ item.locationMapImgAlt }}"
          />
        </picture>
        {%endif%}
        <a>
          {%if item.locationPinImg%}
          <picture>
            {%for format, images in item.locationPinImg%}
            <source
              srcset="{{ images | srcset }}"
              sizes="(max-width: 900px) 100vw, 900px"
              type="image/{{ format }}"
            />
            {%endfor%}
            <img
              src="{{ item.locationPinImg.jpeg[0].url }}"
              alt="{{ item.locationPinImgAlt }}"
            />
          </picture>
          {%endif%}
        </a>
      </div>
    </div>
  </section>

  <section id="section__iWant">
    <div class="column__1">
      {%if item.iWantImg%}
          <picture>
            {%for format, images in item.iWantImg%}
            <source
              srcset="{{ images | srcset }}"
              sizes="(max-width: 900px) 100vw, 900px"
              type="image/{{ format }}"
            />
            {%endfor%}
            <img
              src="{{ item.iWantImg.jpeg[0].url }}"
              alt="{{ item.iWantImgAlt }}"
            />
          </picture>
          {%endif%}
          <div class="iWantCard">
            {%if item.iWantCard.img%}
          <picture>
            {%for format, images in item.iWantCard.img%}
            <source
              srcset="{{ images | srcset }}"
              sizes="(max-width: 900px) 100vw, 900px"
              type="image/{{ format }}"
            />
            {%endfor%}
            <img
              src="{{ item.iWantCard.img.jpeg[0].url }}"
              alt="{{ item.iWantImgAlt }}"
            />
          </picture>
          {%endif%}
            <h2>{{ item.iWantCard.h2 | safe }}</h>
              <a class="btn" href="{{ item.iWantCard.btn.link | safe }}">{{item.iWantCard.btn.name}}</a>
          </div>
    </div>
  </section>*/