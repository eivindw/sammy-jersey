package jersey;

import javax.ws.rs.core.Application;
import java.util.Set;

import static com.google.common.collect.Sets.newHashSet;

public class RestApplication extends Application {
   @Override
   public Set<Class<?>> getClasses() {
      return newHashSet(
         TestResource.class,
         AnotherTestResource.class
      );
   }
}
