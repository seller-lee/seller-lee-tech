---
title: 코드 커버리지 분석 도구 적용기 - 1편, 코드 커버리지(Code Coverage)가 뭔가요?
author: Junyoung Lee
date: 2020-10-04 12:00:00
hero: ./images/hero.jpg
slug: /java-code-coverage-tool-part1
---

안녕하세요. 우아한테크코스 2기, 셀러리 컴퍼니에서 [직고래](https://play.google.com/store/apps/details?id=com.sellerleecompany.jikgorae)를 개발하고 있는 스티치입니다.

![stitch](./images/stitch.jpg)

이번에 직고래 프로젝트에 **코드 커버리지 분석 도구**를 적용하게 되었는데요, 코드 커버리지 분석 도구를 적용하는 과정에서 **학습한 내용**과 **어떻게 적용했는지**에 대해 소개해보고자 합니다.

총 3편의 글로 작성될 계획이며, 이번 글에서는 **코드 커버리지가 무엇인지, 그리고 저희 프로젝트에서는 어떤 코드 커버리지 분석 도구를 적용할 것인지**에 관해 이야기해보도록 하겠습니다.

시작하기에 앞서 코드 커버리지와 밀접하게 관련 있는 **테스트 코드**에 대해 간단하게 설명하고 들어가도록 하겠습니다.

저희 팀은 직고래 프로젝트를 진행하면서 꾸준히 **테스트 코드를 작성**하고 있습니다.

테스트 코드를 작성하는 것이 그리 재밌는 일이 아님에도 불구하고 ~~(물론 저는 테스트 코드 작성이 너무 재미있어요 😆)~~, 테스트 코드를 작성하는 이유는 테스트 코드를 작성하면 얻을 수 있는 **다양한 장점** 때문입니다.

몇 가지만 이야기해보면

- 제품의 **안정성**을 높여준다.
- 기능 추가 및 수정으로 인한 **부작용(*Side-effect*)**을 줄일 수 있다.
- **깔끔하고 재사용성이 좋은 코드 작성**을 가능하게 해준다.

등이 있습니다.

테스트 코드가 가지는 장점을 잘 알았으니 테스트 코드를 열심히 작성해야겠죠? 그런데, 테스트 코드를 잘 작성하고 있는지는 **어떻게 확인할 수 있을까요?**

**기능 추가 및 수정으로 인한 부작용을 줄여준다**라고 했는데, 혹시나 테스트 코드 작성을 빠트린 부분이 발생한다면 어떻게 할까요?

테스트 코드를 **정말 열심히** 작성하고 있었는데 하필 딱! <u>실수로 테스트 코드가 작성되지 않은 로직</u>에 대한 **변경**이 발생했고, 이 변경으로 인해 **부작용이 발생**한다면?

과연 우리는 이런 상황이 발생하지 않으리란 보장을 할 수 있을까요? 만약 보장할 수 없다면, 우리는 언젠가 발생할지 모르는 일에 대해 항상 불안감에 떨며 개발을 해야 하는 걸까요?

지금부터 소개할 코드 커버리지는 이러한 우리의 **불안감을 해소**해 줄 수 있을 것입니다.

## 코드 커버리지(*Code Coverage*)란?

### 코드 커버리지(*Code Coverage*)

> In [computer science](https://en.wikipedia.org/wiki/Computer_science), **test coverage** is a measure used to describe the degree to which the [source code](https://en.wikipedia.org/wiki/Source_code) of a [program](https://en.wikipedia.org/wiki/Computer_program) is executed when a particular [test suite](https://en.wikipedia.org/wiki/Test_suite) runs. A program with high test coverage, measured as a percentage, has had more of its source code executed during testing, which suggests it has a lower chance of containing undetected [software bugs](https://en.wikipedia.org/wiki/Software_bug) compared to a program with low test coverage. - [wikipedia](https://en.wikipedia.org/wiki/Code_coverage)

코드 커버리지는 소프트웨어의 **테스트 케이스가 얼마나 충족되었는지를 나타내는 지표** 중 하나입니다. 테스트를 진행하였을 때 **'코드 자체가 얼마나 실행되었느냐'**는 것이고, 이는 **수치**를 통해 확인할 수 있습니다.

### 코드 커버리지는 어떻게 측정할까?

코드 커버리지는 소스 코드를 기반으로 수행하는 **화이트 박스 테스트**를 통해 측정합니다.

> **블랙 박스 테스트(*Black-box test*)**
> <br/>
>
> \- 소프트웨어의 **내부 구조나 작동 원리를 모르는 상태에서 동작을 검사**하는 방식이다.
>
> \- 올바른 입력과 올바르지 않은 입력을 입력하여 **올바른 출력이 나오는지 테스트**하는 기법이다.
>
> \- **사용자 관점**의 테스트 방법이라 볼 수 있다.
> <br/>
> 
> **화이트 박스 테스트(*White-box test*)**
> <br/>
>
> \- 응용 프로그램의 **내부 구조와 동작을 검사**하는 테스트 방식이다.
>
> \- 소프트웨어 **내부 소스 코드를 테스트**하는 기법이다.
>
> \- **개발자 관점**의 단위 테스트 방법이라 볼 수 있다.

그럼 측정하는 **기준**으로는 어떤 것들이 있을까요?

먼저 코드의 구조를 살펴보면 크게 **구문(*Statement*), 조건(*Condition*), 결정(*Decision*)**의 구조로 이루어져 있습니다. 코드 커버리지는 이러한 코드의 구조를 **얼마나 커버했느냐에 따라 측정기준이 나뉘게 됩니다.**

- **구문(*Statement*)**

  > **라인(*Line*) 커버리지**라고 부르기도 합니다.

  **코드 한 줄이 한 번이상 실행**된다면 충족된다.

  ```java
  void foo (int x) {
      system.out("start line"); // 1번
      if (x > 0) { // 2번
          system.out("middle line"); // 3번
      }
      system.out("last line"); // 4번
  }
  ```

  위의 코드를 테스트한다고 가정해보겠습니다. **x = -1**을 테스트 데이터로 사용할 경우, if 문의 조건을 통과하지 못하기 때문에 3번 코드는 실행되지 못합니다. 총 4개의 라인에서 1, 2, 4번의 라인만 실행되므로 **구문 커버리지**는 **3 / 4 * 100 = 75(%)**가 됩니다.

- **조건(*Condition*)**

  **모든 조건식의 내부 조건이 true/false**을 가지게 되면 충족된다.

  ```java
  void foo (int x, int y) {
      system.out("start line"); // 1번
      if (x > 0 && y < 0) { // 2번
          system.out("middle line"); // 3번
      }
      system.out("last line"); // 4번
  }
  ```

  > **내부 조건**이라는 것이 헛갈릴 수 있는데 **조건식 내부의 각각의 조건**이라 생각하면 될 것 같습니다.
  >
  > 위 코드를 예시로 보면 모든 조건식으로는 2번 if 문이 있고, 그중 내부 조건은 조건식 내부의 **x > 0**, **y < 0**을 말합니다.

  위의 코드를 테스트한다고 가정해보겠습니다. **조건 커버리지**를 만족하는 테스트 케이스로는 **x = 1, y = 1**, **x = -1, y = -1**이 있습니다. 이는 **x > 0** 내부 조건에 대해 **true/false**를 만족하고, **y < 0** 내부 조건에 대해 **false/true**를 만족합니다. 그러나 테스트 케이스는 if 문은 조건에 대해 **false**만 반환합니다. if 문의 조건을 통과하지 못하기 때문에 3번 코드는 실행되지 못합니다.

  조건 커버리지를 기준으로 테스트를 진행할 경우, **구문 커버리지와 결정 커버리지를 만족하지 못하는 경우가 존재**할 수 있습니다.

- **결정(*Decision*)**

  > **브랜치(*Branch*) 커버리지**라고 부르기도 합니다.

  **모든 조건식이 true/false**을 가지게 되면 충족된다.

  ```java
  void foo (int x, int y) {
      system.out("start line"); // 1번
      if (x > 0 && y < 0) { // 2번
          system.out("middle line"); // 3번
      }
      system.out("last line"); // 4번
  }
  ```

  위의 코드를 테스트한다고 가정해보겠습니다. if 문의 조건에 대해 **true/false** 모두 가질 수 있는 테스트 케이스로는 **x = 1, y = -1**, **x = -1, y = 1**이 있습니다. 첫 번째 테스트 데이터는 **x > 0**과 **y < 0** 모두 **true**이기 때문에 if 문의 조건에 대해 **true를 반환**합니다. 두 번째 테스트 데이터는 **x < 0**에서 이미 **false**이기 때문에 if 문의 조건에 대해 false를 반환합니다. 모든 조건식에 대해 **true**와 **false**를 반환하므로 **결정 커버리지를 충족**합니다.

위의 세 가지 코드 커버리지 중에서 구문 커버리지가 가장 대표적으로 많이 사용되고 있습니다.

### 코드 커버리지가 왜 중요하죠?

지금까지 **코드 커버리지가 무엇인지 그리고 어떻게, 어떤 기준으로 측정하는지**에 대해 알아보았습니다.

코드 커버리지가 어떤 것인지 알게 되었다면, 이제 이런 의문이 들 수 있습니다.

> 코드 커버리지가 뭔지는 이제 알겠어요.
>
> 근데 코드 커버리지가 왜 중요하나요? 그리고 실제로 코드 커버리지를 많이 사용하는가요?

먼저 **코드 커버리지의 중요성**은 **테스트 코드의 중요성과 일맥상통**한다고 생각합니다.

테스트 코드를 작성함으로써 얻을 수 있는 장점에 대해서는 앞서 설명해드렸습니다. 그렇다면 테스트 코드를 잘 작성하고 있는지는 어떻게 알 수 있을까요?

테스트 코드는 발생할 수 있는 **모든 시나리오에 대해 작성**되어야 합니다. 그런데 개발자도 사람인지라 테스트로 커버하지 못하는 부분이 발생할 수 있습니다. 비즈니스 코드는 때에 따라 매우 복잡하게 작성되기도 합니다. 단순한 분기문을 생각해보더라도 분기문의 조건에 들어갈 값이 1이 더 크고 작음에 따라 로직은 실행될 수도 있고 안될 수도 있습니다.

이렇게 테스트에서 놓칠 수 있는 부분들을 코드 커버리지를 통해 확인할 수 있습니다. 그리고 그에 따라 부족한 테스트를 추가할 수 있습니다. 코드 커버리지는 **휴먼 에러를 최대한 방지**할 수 있도록 도와주는 용도라고 생각해도 될 것 같습니다.

그럼 실제로도 코드 커버리지를 많이 사용하고 있을까요?

많은 서비스 기업에서는 테스트 코드의 중요성을 인지하고 **코드 커버리지를 최대한 유지 및 지속해서 상승**시키면서 개발을 하려고 노력합니다. 코드 커버리지 도구와 소나큐브(*SonarQube*)와 같은 **정적 코드 분석 도구**를 함께 활용하여 코드 커버리지가 기존보다 떨어지는 경우 커밋(*commit*)이 불가능하도록 제한하기도 합니다.

이처럼 코드 커버리지는 **코드의 안정성을 어느 정도 보장해 줄 수 있는 지표**이기 때문에 많은 프로젝트에서 커버리지를 확인하고 관리, 적용하려고 노력합니다.

## 자바 코드 커버리지

저희 [직고래](https://play.google.com/store/apps/details?id=com.sellerleecompany.jikgorae)는 자바 기반의 프레임워크인 [스프링 부트](https://spring.io/projects/spring-boot)를 사용하고 있습니다.

그래서 이번에는 자바의 코드 커버리지 분석 도구로 **어떤 것들이 존재**하는지, 그리고 저희는 **어떤 분석 도구를 선택했는지** 소개하도록 하겠습니다.

### 자바 코드 커버리지 분석 도구지

**코드 커버리지 분석 도구**는 앞서 설명한 **코드 커버리지를 개발자가 직접 확인하지 않고 분석할 수 있도록 도와주는 도구**입니다. 저희는 자바로 프로그램을 만들기 때문에 **자바 커버리지 분석 도구**에 대해 알아보도록 하겠습니다.

**자바 코드 커버리지 분석 도구**는 여러가지가 존재하는데, 대표적으로 **Cobertura, Jacoco, Clover** 등이 있습니다.

각각의 도구가 가지는 장단점을 확인하고 싶었으나, 아쉽게도 **Jacoco**를 제외한 나머지는 레퍼런스가 너무 부족하였습니다.

간단하게나마 Jacoco가 가지는 특징을 소개해보면

- 코드 커버리지에 대한 결과를 html이나 xml, csv와 같은 리포트로 생성한다.
- 설정한 커버리지를 만족하는지 여부를 확인할 수 있다.
- 사용 방법이 간단하다.

등이 있습니다.

> Atlassian에서 [위 세 가지 도구의 차이점을 분석한 글](https://confluence.atlassian.com/clover/comparison-of-code-coverage-tools-681706101.html)이 있으니 참고해주시기 바랍니다.

### 선택하게 된 도구는?

저희 프로젝트에서는 코드 커버리지 분석 도구로 **Jacoco**를 사용하기로 결정했습니다!

![selected](./images/selected.png)

선택한 이유는 크게 2가지가 있었습니다.

1. **레퍼런스가 많다(다른 도구의 경우 레퍼런스가 너무 부족했다).**
2. 사용하기가 쉽다.

이 중에서 첫 번째 이유가 선택에 가장 큰 영향을 주었습니다.

새로운 기술을 처음 도입하는 상황에서 **레퍼런스의 유무**는 정말 중요하다고 생각합니다. 기술을 도입하는 과정에서는 **여러 시행착오들이 발생**하는데, 레퍼런스가 많이 존재한다면 이를 **빠르게 해결할 수 있기 때문**입니다. 그런 부분에서 Jacoco는 적용한 후기나 설명이 다른 도구들에 비해 월등하게 많았습니다.

이러한 이유로 인해 이번 프로젝트에서는 Jacoco를 사용하기로 결정하였습니다.

## 정리하며

이번 글에서는 **'코드 커버리지가 무엇인지'**와 **'자바 코드 커버리지 분석 도구로는 어떤 것들이 있고, 무엇을 선택했는지'**를 간단하게 소개해보았습니다.

다음 글에서 Jacoco를 **실제 프로젝트에서 어떻게 적용했는지**에 대해 소개하도록 하겠습니다.

그리고 추가적으로 **코드 정적 분석 도구**인 **소나큐브(*SonarQube*)**도 함께 도입할 예정인데 이에 대해서도 같이 소개하도록 하겠습니다.

기대해주세요!!! 🤩

### 참고 링크

- [코드 커버리지 - 위키백과]([https://ko.wikipedia.org/wiki/%EC%BD%94%EB%93%9C_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80](https://ko.wikipedia.org/wiki/코드_커버리지))
- [화이트 박스 테스트 vs 블랙 박스 테스트 - 편하게 보는 전자공학 블로그](https://kkhipp.tistory.com/158)
- [코드 커버리지(Code Coverage) - 박상수]([https://medium.com/@pakss328/%EC%BD%94%EB%93%9C%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80-code-coverage-991e79da9e5f](https://medium.com/@pakss328/코드커버리지-code-coverage-991e79da9e5f))
- [코드 커버리지(Code Coverage)란? - Nesoy Blog](https://nesoy.github.io/articles/2018-01/Code-Coverage)
- [구조적 커버리지(Coverage)의 정의와 종류 - 슈어소프트테크](https://blog.naver.com/PostView.nhn?blogId=suresofttech&logNo=221833396343&parentCategoryNo=&categoryNo=155&viewDate=&isShowPopularPosts=false&from=postView)


