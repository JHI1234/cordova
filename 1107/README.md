## 2023년 11월 07일 레포트

---

### 📝 PyScript & Bun 요약 및 정리

### 📝 JavaScript과 jQuery를 활용한 학과 갤러리 구현

---

# 📝 PyScript & Bun 요약 및 정리

## **PyScript**

### PyScript란?

<aside>
💡 PyScript는 Pyodide, Emscripten, WASM(WebAssembly)와 더불어 기타 최신 웹 기술을 사용하여 HTML에서 Python code를 사용할 수 있도록 하는 front-end 프레임워크입니다.

</aside>

그동안 Python은 웹과 상호작용을 하기 위해선 HTML, CSS, JS를 서버로 실행해야만 가능했는데 이를 해결하기 위해서 나온 것이 PyScript이며, 공식 사이트에서도 "Run python in your HTML"이라는 문구가 타이틀일 정도로 HTML에서 Python code를 작성할 수 있다는 것 자체로도 Python의 단점을 해결하고 장점을 더욱 극대화할 수 있는 기술이 바로 PyScript입니다.

### PyScript의 특징

-   **Python in the browser**: Server나 plug-in을 사용하지 않아도 Python code를 HTML에서 실행할 수 있으며, 외부 파일과 py파일 호스팅 또한 지원합니다.
-   **Python ecosystem**: 인기 있는 Python library와 science package를 지원합니다. (numpy, pandas, scikit-learn, Matplotlib, Folium, Altair, Panel, DeckGL 등)
-   **Python with JavaScript**: Python과 JavaScript의 개체 및 네임스페이스 간의 양방향 통신을 지원합니다.
-   **Environment management**: 개발자가 실행할 페이지 코드에 포함할 파일과 패키지를 정의할 수 있도록 있습니다.
-   **Visual application development**: 개발자는 버튼 및 컨테이너, 텍스트 상자 등과 같이 쉽게 사용할 수 있는 큐레이션 된 UI 구성 요소를 사용하여 쉽게 빌드할 수 있습니다.
-   **Flexible framework**: PyScript는 개발자가 Python에서 직접 연결이 가능하며 확장 가능한 새로운 구성 요소를 생성하고 공유할 수 있는 유연한 프레임워크입니다.

참고로 PyScript에서는 아직 다른 웹 브라우저에서 코드 동작에 약간의 차이가 있을 수 있어 Google Chrome 웹 브라우저에서의 테스트를 권장하고 있습니다만 직접 실행해본 결과 가볍게 테스트를 진행할 땐 Edge에서도 이상 없이 잘 동작하는 것을 확인했습니다. (REPL의 적용은 Chrome 권장)

### PyScript의 단점

공식 사이트에서 PyScript는 아직 매우 초기 단계며 개발할 부분이 많이 남아있다고 합니다. 그렇다 보니 아직 불안정한 부분을 Anaconda에서도 인지하고 있는데 이중 가장 치명적인 것은 페이지 로딩 시간이 오래 걸린다는 점입니다. 이 문제는 많은 변경이 필요할 것으로 예상되며 이 외에도 문제가 있어 PyScript가 완전해지기까지는 시간이 걸릴 것으로 예측됩니다. 그렇기에 Anaconda에서도 사람들이 탐구하고 직접 실행해보는 것은 권장하지만, 상업용으로는 사용하지 않는 것이 좋을 것이라며 권고하고 있습니다.

### PyScript 기대 효과

PyScript는 모든 것이 웹 브라우저를 통해 구현되기 때문에 Jupyter Notebook의 기능을 완벽히 대체할 수 있습니다. Jupyter Notebook은 웹 인터페이스 기반 REPL, 셀단위 편집 지원, markdown 셀 지원 등과 같은 기능을 지원하는데, 이는 모두 PyScript로 구현 가능한 영역에 있습니다. 그렇게 되면 Jupyter Notebook를 설치하지 않아도 모바일, PC 어디에서나 간편하게 동일한 기능을 사용할 수 있을 것입니다. 이렇듯 기기와 장소 구분 없이 액세스가 가능한 웹 브라우저의 특징은 Data Scientist, Researcher에게 더 많은 유연성과 기능을 제공할 것입니다. 예를 들어 데이터 분석 혹은 머신 러닝을 하기 위한 CSV 파일만 업로드하면 어디서든 실행이 가능하며 시각화까지 제공해준다면 협업하기에 더욱 편해질 것으로 예상됩니다.

실제로도 PyScript는 여러 수학 Library와 머신러닝, 딥러닝과 같은 미래 기술을 브라우저에서 구현하는 것을 목표로 하고 있으며, 여러 Python Project들이 웹으로 유입될 경우, javascript와 Python은 각자 바라보는 방향성이 달라 그만큼 교집합이 적기 때문에 웹 생태계가 더욱 방대해질 것으로 예상됩니다.

만약 PyScript Project가 성공하여 정식적으로 기능이 제공되면 인실리코젠의 R&D Center와 AIDX 부서에서의 데이터 분석과 머신러닝 활용 시에도 더욱 긍정적인 효과를 가져올 수 있을 것으로 예상됩니다. PyScript는 Anaconda에서도 매우 초기 단계라고 할 만큼 아직 개선해야 할 부분이 많은 프레임워크입니다. 그러므로 정식적으로 사용하기엔 긴 시간이 소요될 것이지만 여러 개발자의 trouble shooting과 Anaconda 팀의 노력이면 충분히 성공할 수 있는 기술이라고 생각하고 있습니다.

---

# **Bun**

### **Bun 이란?**

<aside>
💡 Bun은 Node.js와 Deno처럼 기본적으로 백엔드에서 사용하기 위해서 만들어진 매우 빠른 자바스크립트 런타임 및 패키지 관리자입니다.

</aside>

```
Bun :https://bun.sh/
github :https://github.com/oven-sh/bun
```

### **왜 빠를까?**

Bun은 V8엔진을 사용하는 기존의 Node, Deno와는 달리 일반적으로 더 빠른것으로 간주되는 WebKit의 JavaScriptCore를 기반으로 구축되었으며, C++, Rust가 아닌 시스템 하드웨어에서 읽을 수 있는 저수준 프로그래밍 언어인 Zig로 작성되어있어 더 빠르게 동작할 수 있는 것으로 보입니다.

```
ziglang :https://ziglang.org/ko/
```

### **Bun의 특징**

-   속도를 우선으로 개발되었습니다.
-   React를 서버로 렌더링하거나 데이터베이스 쿼리를 실행할 때 Node 및 Deno보다 약 3배 정도 빠릅니다.
-   npm과 호환할 수 있는 패키지 매니저를 포함합니다.
-   yarn install을 bun install로 바꾸기만 해도 최대 20배 정도 빠르게 설치할 수 있습니다.
-   V8 엔진 대신 WebKit에서 사용하는 JavaScriptCore을 엔진을 사용합니다.
-   기존에 작업 중인 JavaScript / TypeScript의 개발환경을 그대로 쓸 수 있도록 설계되었습니다.
-   Node.js의 모듈 resolution 알고리즘을 구현하므로 node_modules을 그대로 사용할 수 있습니다.
-   ESM 및 CommonJS를 모두 지원하나, 내부적으로는 ESM을 사용합니다.
-   모든 파일이 트랜스파일 되기 때문에 TypeScript 및 JSX를 모두 지원합니다.
-   .env 파일로부터 자동으로 환경변수를 불러오기 때문에, 더 이상 `require("dotenv").config()` 를 작성할 필요가 없습니다👍

### **Bun install**

Bun의 설치 및 사용 명령어들은 Node와 비슷한 부분이 매우 많습니다. Bun을 처음 봤지만 생소하지 않게 느껴지는 이유도 Node와 유사한 명령어 때문이라고 생각됩니다.

```
curl -fsSLhttps://bun.sh/install | bash
```

### **Bun command**

Bun을 설치 후 터미널에 bun -help를 입력해 보시면 많은 명령어가 나오는데, 자주 사용할만한 명령어를 몇 가지 정리해보았습니다.

-   **bun dev** : 로컬 서버 실행
-   **bun create** : 프로젝트 생성 ex) **bun create react [project-name]** (react cli 설치)
-   **bun run** : bun 스크립트 실행
-   **bun install** : package.json에 대한 종속성 설치
-   **bun add** : 새로운 패키지 종속성 추가
-   **bun remove** : 설치된 패키지 종속성 제거

---

-   **참고자료 및 출처**
    -   https://pyscript.net
    -   https://gseok.github.io/tech-talk-2022/2022-08-15-Bunjs/
    -   https://medium.com/@YNNSme/node-js-is-dead-long-live-bun-3d888eab63d7
    -   https://blog.insilicogen.com/67

---

# 📝 JavaScript과 jQuery를 활용한 학과 갤러리 구현

![image](https://github.com/JHI1234/cordova/assets/106959823/6f58bb90-5808-4d33-968e-fb6ebe95d343)
![image](https://github.com/JHI1234/cordova/assets/106959823/a3a02493-1857-4b5e-94f5-9de6ea878136)
![image](https://github.com/JHI1234/cordova/assets/106959823/1346671a-8206-4ef8-89ed-ac9c1dc09805)

---

-   **참고자료 및 출처**
    -   https://chlee21.tistory.com/140
    -   https://ingnoh.tistory.com/144
    -   https://webdee.tistory.com/62
    -   https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Image_gallery
