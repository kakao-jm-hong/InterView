# ARIA-TAB
- 탭은 스타일을 의미하는 것이 아니라 현재 페이지 내용에 색인을 제공하는 구조(tablist, tab, tabpanel)를 의미합니다.
- role 속성은 값에 따라 적용할 수 있는 HTML 요소가 제한됩니다.<mark>role="tabpanel" 속성은 \<ul> 요소에 사용할수 없습니다.</mark>

## 기본 골격

```
    <role="tablist">
        <role="tab" />
        <role="tab" />
        <role="tab" />
    </>
    <role="tabpanel" />
    <role="tabpanel" />
    <role="tabpanel" />
```

## 주요 속성
### role ="tab"
- aria-selected : 현재 탭의 선택 여부를 확인합니다.
- aria-controls : 현재 tab과 연결된 panel의 id값을 적용합니다.
- tabindex : 활성 포커스 속성입니다.
    - [자세한 내용](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/tabindex)
### role ="tabpanel"
- tabindex : 활성 포커스 속성입니다. 활성되면 키보드 tab버튼으로 접근 가능합니다.
- aria-labelledby : 현재 panel과 연결된 tab의 id값을 적용합니다.

### BASE HTML
```
    <div class="tabs">
        <div role="tablist" aria-label="my-tab">
            <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" tabindex="0">
                첫번째 탭
              </button>
            <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
                두번째 탭
              </button>
            <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">
                세번재 탭
            </button>
        </div>
        <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
          <p>첫번째 탭입니다.</p>
        </div>
        <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
          <p>두번째 탭입니다.</p>
        </div>
        <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
          <p>세번째 탭입니다.</p>
        </div>
      </div>
```

### aria-controls <---> aria-labelledby
<img src ="" width="400" />
### 출처
- https://www.w3.org/TR/wai-aria-1.1/#tab
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
- https://aoa.gitbook.io/skymimo/aoa-2018/2018-aria/tab
- https://mulder21c.github.io/2018/06/04/how-to-make-accessible-tab-content/