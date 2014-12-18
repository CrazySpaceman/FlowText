FlowText
========

jQuery plugin for responsive font-size

## Usage

Sample usage with default parameters:

```
$('.element').flowtext();
```

Sample usage with custom parameters:

```
$('.element').flowtext({
    minFontSize: 16,
    maxFontSize: 24,
    minScreenWidth: 320,
    maxScreenWidth: 1280
});
```

## Installation

* [Download the latest release](https://github.com/libeo/FlowText/releases/latest)
* Clone the repo: `git clone https://github.com/libeo/FlowText.git`
* Install with Bower: `bower install flowtext`

## Demo

![FlowText Demo](/demo.gif?raw=true)

## Parameters

| Parameter       | Description             | Default value |
| --------------- | ----------------------- | ------------- |
| minFontSize     | Minimum font-size value | 16            |
| maxFontSize     | Maximum font-size value | 18            |
| minScreenWidth  | Minimum screen width    | 768           |
| maxScreenWidth  | Maximum screen width    | 1024          |
