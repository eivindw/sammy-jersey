package wro;

import ro.isdc.wro.extensions.manager.ExtensionsConfigurableWroManagerFactory;
import ro.isdc.wro.extensions.processor.js.DustJsProcessor;
import ro.isdc.wro.model.resource.processor.ResourcePreProcessor;
import ro.isdc.wro.model.resource.processor.impl.ExtensionsAwareProcessorDecorator;

import java.util.Map;

public class CustomWroManagerFactory extends ExtensionsConfigurableWroManagerFactory {
   @Override
   protected void contributePreProcessors(Map<String, ResourcePreProcessor> map) {
      map.put("dustJs", ExtensionsAwareProcessorDecorator.decorate(new DustJsProcessor()).addExtension("dust"));
   }
}
