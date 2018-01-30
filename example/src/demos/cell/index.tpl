<div class="cell">

  <Cell title="基本用法" style="margin-top: 62px;"></Cell>
  <Cell title="显示图标">
    <img src="../../../images/letter-b.svg" slot="icon">
  </Cell>


  <Cell title="显示箭头" style="margin-top: 20px;" content="使用arrow属性显示箭头" arrow>
    <img src="../../../images/letter-a.svg" slot="icon">
  </Cell>
  <Cell title="回到首页" content="使用to属性显示箭头,默认显示" to="/">
    <img src="../../../images/letter-o.svg" slot="icon">
  </Cell>

  <Cell title="to属性支持外部链接" content="使用to属性跳转百度" to="https://www.baidu.com">
    <img src="../../../images/letter-b.svg" slot="icon">
  </Cell>


  <CellGroup style="margin-top: 20px;">
    <Cell title="Cell分组"></Cell>
    <Cell title="Cell分组">
      <img src="../../../images/letter-a.svg" slot="icon">
      <div slot="body">
        <Badge tipNum></Badge>
      </div>
    </Cell>
    <Cell title="Cell分组" arrow>
      <img src="../../../images/letter-b.svg" slot="icon">
      <div slot="body">
        <Badge tipNum="3"></Badge>
      </div>
    </Cell>
  </CellGroup>

  <CellGroup style="margin-top: 20px;">
    <Cell title="栏目标题" content="关闭" arrow></Cell>
    <Cell title="栏目标题" arrow>
      <div slot="body" style="color: red">未开启</div>
    </Cell>
  </CellGroup>
</div>
